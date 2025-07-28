import { useState, useEffect } from 'react';
import { RefreshCw, CheckCircle } from 'lucide-react';
import Swal from 'sweetalert2';

export const OfflineStatusBar = ({ 
  isOnline, 
  pendingItems, 
  isSyncing, 
  onSync 
}) => {
  const showOfflineAlert = () => {
    if (isOnline) return;
    
    Swal.fire({
      title: 'You are offline',
      text: 'Your data will be saved locally and synced when you reconnect.',
      icon: 'warning',
      confirmButtonText: 'OK',
      allowOutsideClick: false
    });
  };

  useEffect(() => {
    showOfflineAlert();
  }, [isOnline]);

  return (
    <div className="p-4 flex justify-between items-center border-b">
      <div className="flex items-center space-x-4">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
          isOnline ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {isOnline ? 'Online' : 'Offline'}
        </span>
        
        {pendingItems.length > 0 && (
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {pendingItems.length} pending item(s)
          </span>
        )}
      </div>

      {pendingItems.length > 0 && isOnline && (
        <button
          onClick={onSync}
          disabled={isSyncing}
          className={`flex items-center px-4 py-2 rounded-md shadow transition-all ${
            isSyncing 
              ? 'bg-gray-300 text-gray-600' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isSyncing ? (
            <RefreshCw className="animate-spin mr-2 h-4 w-4" />
          ) : (
            <CheckCircle className="mr-2 h-4 w-4" />
          )}
          Sync Now
        </button> 
      )}
    </div>
  );
};