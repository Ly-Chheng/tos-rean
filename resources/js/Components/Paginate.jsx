import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"; // if you're using Heroicons
import React from "react";

function Pagination({
    currentPage,
    lastPage,
    onPageChange,
    totalItems,
    itemsPerPage,
    onItemsPerPageChange,
    perPageOptions = [8, 10, 25, 50],
}) {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    const getPages = () => {
        const pages = [];
        if (lastPage <= 5) {
            for (let i = 1; i <= lastPage; i++) pages.push(i);
        } else {
            if (currentPage <= 3) pages.push(1, 2, 3, 4, "...", lastPage);
            else if (currentPage >= lastPage - 2)
                pages.push(1, "...", lastPage - 3, lastPage - 2, lastPage - 1, lastPage);
            else
                pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", lastPage);
        }
        return pages;
    };

    const pages = getPages();

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 bg-white px-4 py-4 sm:px-6 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
            <div className="text-sm mb-2 sm:mb-0 text-gray-700 dark:text-gray-200">
                Showing <span className="font-semibold">{startItem}</span> to{" "}
                <span className="font-semibold">{endItem}</span> of{" "}
                <span className="font-semibold">{totalItems}</span> results
            </div>

            <div className="flex items-center space-x-4">
                {/* Items per page selector */}
                {/* <select
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    value={itemsPerPage}
                    onChange={(e) => onItemsPerPageChange && onItemsPerPageChange(Number(e.target.value))}
                    aria-label="Items per page"
                >
                    {perPageOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select> */}

                {/* Pagination buttons */}
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => onPageChange(currentPage - 1)}
                        className="inline-flex items-center gap-1 rounded-l-md px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 ring-1 ring-gray-300 dark:ring-gray-600 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        <ChevronLeftIcon className="w-4 h-4" />
                        Prev
                    </button>

                    {pages.map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === "number" && onPageChange(page)}
                            disabled={page === "..."}
                            className={`inline-flex items-center px-4 py-2 text-sm font-medium ${
                                page === currentPage
                                    ? "z-10 bg-blue-600 text-white ring-1 ring-blue-600"
                                    : page === "..."
                                    ? "text-gray-500 dark:text-gray-400 cursor-default"
                                    : "text-gray-700 dark:text-gray-200 ring-1 ring-gray-300 dark:ring-gray-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-800 dark:hover:text-blue-300"
                            }`}
                            aria-label={page === "..." ? "More pages" : `Page ${page}`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        disabled={currentPage === lastPage}
                        onClick={() => onPageChange(currentPage + 1)}
                        className="inline-flex items-center gap-1 rounded-r-md px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 ring-1 ring-gray-300 dark:ring-gray-600 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        Next
                        <ChevronRightIcon className="w-4 h-4" />
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default Pagination;
