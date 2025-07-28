import { useState } from "react";
import { Link, router } from "@inertiajs/react";

export default function Pagination({ links, meta, routeName, queryParams = {}, onEntriesChange, defaultEntries = "10" }) {
  const [entries, setEntries] = useState(queryParams.per_page || defaultEntries);

  const updateFilters = (newParams) => {
    const updatedParams = {
      ...queryParams, // Preserve all query parameters (date_from, date_to, filter_type, search, etc.)
      per_page: entries,
      page: queryParams.page || 1,
      ...newParams,
    };
    if (updatedParams.search === "") {
      delete updatedParams.search;
    }
    router.get(route(routeName), updatedParams, {
      preserveState: true,
      preserveScroll: true,
      replace: true,
    });
  };

  const handleEntriesChange = (e) => {
    const value = e.target.value;
    setEntries(value);
    updateFilters({ per_page: value, page: 1 });
    if (onEntriesChange) onEntriesChange(value);
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          បង្ហាញ {meta?.from || 0} to {meta?.to || 0} of {meta?.total || 0} សរុប
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">បង្ហាញ</span>
          <select
            value={entries}
            onChange={handleEntriesChange}
            className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded px-3 py-1 text-sm appearance-none pr-5"
          >
            <option value="10">១០</option>
            <option value="50">៥០</option>
            <option value="100">១០០</option>
            <option value="500">៥០០</option>
          </select>
        </div>
        {links.map((link, index) => (
          <button
            key={index}
            onClick={() => {
              if (!link.url) return;
              const url = new URL(link.url, window.location.origin);
              const page = url.searchParams.get("page") || "1"; // Extract only the page parameter
              updateFilters({ page }); // Use updateFilters to preserve all queryParams
            }}
            className={`px-3 py-1 rounded text-sm ${
              link.active
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            } ${!link.url ? "cursor-not-allowed opacity-50" : ""}`}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        ))}
      </div>
    </div>
  );
}