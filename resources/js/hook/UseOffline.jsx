import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const useOffline = (storageKey = 'pendingItems') => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [pendingItems, setPendingItems] = useState([]);
  const [isSyncing, setIsSyncing] = useState(false);

  // Load pending items from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(storageKey)) || [];
    setPendingItems(saved);
  }, [storageKey]);

  // Save to localStorage when pendingItems change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(pendingItems));
  }, [pendingItems, storageKey]);

  // Network status detection
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      if (pendingItems.length > 0) {
        Swal.fire({
          title: 'Back Online!',
          text: `${pendingItems.length} pending items will be synced.`,
          icon: 'info',
          timer: 3000
        });
      }
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      Swal.fire({
        title: 'You are offline',
        text: 'Your changes will be saved locally and synced later.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [pendingItems]);

  const addPendingItem = (item) => {
    const newItem = {
      ...item,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      syncStatus: 'pending'
    };
    setPendingItems(prev => [...prev, newItem]);
    return newItem;
  };

  const confirmOfflineAction = async () => {
    const { isConfirmed } = await Swal.fire({
      title: 'You are offline',
      text: 'Do you want to save this locally and sync when online?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, save locally',
      cancelButtonText: 'Cancel'
    });
    return isConfirmed;
  };

  const removePendingItem = (id) => {
    setPendingItems(prev => prev.filter(item => item.id !== id));
  };

  const syncPendingItems = async (syncCallback) => {
    if (!isOnline || pendingItems.length === 0) return;
    
    setIsSyncing(true);
    try {
      await syncCallback(pendingItems);
      setPendingItems([]);
      Swal.fire({
        title: 'Sync Complete!',
        text: 'All pending items have been synced.',
        icon: 'success',
        timer: 2000
      });
    } catch (error) {
      console.error('Sync failed:', error);
      Swal.fire({
        title: 'Sync Failed',
        text: 'Some items failed to sync. Please try again.',
        icon: 'error'
      });
    } finally {
      setIsSyncing(false);
    }
  };

  return {
    isOnline,
    pendingItems,
    isSyncing,
    addPendingItem,
    removePendingItem,
    syncPendingItems,
    confirmOfflineAction,
    setPendingItems
  };
};