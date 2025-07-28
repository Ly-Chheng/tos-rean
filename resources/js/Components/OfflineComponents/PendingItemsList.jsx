import { CheckCircle, AlertCircle } from 'lucide-react';

export const PendingItemsList = ({ pendingItems, itemType = 'level' }) => {
  if (pendingItems.length === 0) return null;

  return (
    <div className="p-4 border-b">
      <h3 className="text-lg font-semibold mb-3">Pending {itemType}s</h3>
      <div className="space-y-3">
        {pendingItems.map((item) => (
          <div 
            key={item.id}
            className={`p-3 rounded-md border ${
              item.syncStatus === 'failed' 
                ? 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'
                : 'bg-gray-50 border-gray-200 dark:bg-gray-700/30 dark:border-gray-600'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{item.title_en || item.name || `Pending ${itemType}`}</h4>
                {item.title_kh && (
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.title_kh}</p>
                )}
              </div>
              <div className="flex items-center">
                {item.syncStatus === 'failed' ? (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
              </div>
            </div>
            <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400 space-x-4">
              {item.orderby && <span>Order: {item.orderby}</span>}
              {item.status && <span>Status: {item.status === '1' ? 'Active' : 'Inactive'}</span>}
              <span>Saved: {new Date(item.created_at).toLocaleTimeString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};