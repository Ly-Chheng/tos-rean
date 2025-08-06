import { useState } from "react";
import TextInput from "@/components/TextInput";
import SelectWithSearch from "@/components/SelectWithSearch";
import { router } from "@inertiajs/react";

export default function DataTableControls({
  routeName,
  queryParams = {},
  defaultEntries = "10",
  currentPerPage,
  filters = [],
  useReactSelect = false,
  useDateRange = false,
}) {
  // Helper function to get first and last day of current month in correct format
  const getCurrentMonthRange = () => {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    
    const format = (date) => {
      const pad = (num) => num.toString().padStart(2, '0');
      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    };
    
    return {
      firstDay: format(firstDay),
      lastDay: format(lastDay)
    };
  };

  const currentMonth = getCurrentMonthRange();
  const [search, setSearch] = useState(queryParams.search || "");
  const [dateFrom, setDateFrom] = useState(queryParams.date_from || currentMonth.firstDay);
  const [dateTo, setDateTo] = useState(queryParams.date_to || currentMonth.lastDay);
  const [filterValues, setFilterValues] = useState(
    filters.reduce((acc, filter) => {
      acc[filter.name] = queryParams[filter.name] || filter.defaultValue || "all";
      return acc;
    }, {})
  );

  const updateFilters = (newParams) => {
    const updatedParams = {
      search,
      per_page: currentPerPage || queryParams.per_page || defaultEntries,
      page: queryParams.page || 1,
      ...(useDateRange ? { 
        date_from: dateFrom || null, 
        date_to: dateTo || null 
      } : {}),
      ...filterValues,
      ...newParams,
    };

    // Clean up empty params
    if (updatedParams.search === "") delete updatedParams.search;
    if (useDateRange) {
      if (!updatedParams.date_from) delete updatedParams.date_from;
      if (!updatedParams.date_to) delete updatedParams.date_to;
    }
    filters.forEach((filter) => {
      if (updatedParams[filter.name] === "all") {
        delete updatedParams[filter.name];
      }
    });

    router.get(route(routeName), updatedParams, {
      preserveState: true,
      preserveScroll: true,
      replace: true,
    });
  };

  const resetFilters = () => {
    setSearch("");
    if (useDateRange) {
      const currentMonth = getCurrentMonthRange();
      setDateFrom(currentMonth.firstDay);
      setDateTo(currentMonth.lastDay);
    }
    const resetFilterValues = filters.reduce((acc, filter) => {
      acc[filter.name] = filter.defaultValue || "all";
      return acc;
    }, {});
    setFilterValues(resetFilterValues);
    
    const defaultParams = {
      page: 1,
      per_page: currentPerPage || queryParams.per_page || defaultEntries,
      search: "",
      ...(useDateRange ? {
        date_from: currentMonth.firstDay,
        date_to: currentMonth.lastDay,
      } : {}),
    };
    
    router.get(route(routeName), defaultParams, {
      preserveState: true,
      preserveScroll: true,
      replace: true,
    });
  };

  const searchFieldChanged = (value) => {
    setSearch(value);
    updateFilters({ search: value, page: 1 });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      searchFieldChanged(e.target.value);
    }
  };

  const handleFilterChange = (filterName, value) => {
    setFilterValues((prev) => ({
      ...prev,
      [filterName]: value,
    }));
    updateFilters({ [filterName]: value, page: 1 });
  };

  const handleDateChange = (field, value) => {
    if (field === "date_from") {
      setDateFrom(value);
      updateFilters({ date_from: value || null, page: 1 });
    } else {
      setDateTo(value);
      updateFilters({ date_to: value || null, page: 1 });
    }
  };

  return (
    <div className="flex justify-between mb-4 w-full">
      <div className="flex items-center w-full">
        {filters.map((filter) => (
          <div key={filter.name} className="flex items-center space-x-2 m-2 w-3/12">
            {filter.type === "select" && (
              <>
                {useReactSelect ? (
                  <div className="w-full">
                    <SelectWithSearch
                      id={filter.name}
                      options={filter.options}
                      value={filterValues[filter.name]}
                      onChange={(value) => handleFilterChange(filter.name, value)}
                      errors={{}}
                      isMulti={false}
                      isClearable={false}
                      isSearchable
                      className="w-full"
                      classNamePrefix="select"
                    />
                  </div>
                ) : (
                  <div className="w-full">
                    <select
                      value={filterValues[filter.name]}
                      onChange={(e) => handleFilterChange(filter.name, e.target.value)}
                      className="w-full py-2 px-3 border rounded-lg text-sm bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {filter.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
        {useDateRange && (
          <>
            <div className="flex items-center space-x-2 m-2 w-3/12">
              <TextInput
                id="date_from"
                type="date"
                name="date_from"
                value={dateFrom}
                className="mt-1 block w-full py-2 px-3 border rounded-lg text-sm bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => handleDateChange("date_from", e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2 m-2 w-3/12">
              <TextInput
                id="date_to"
                type="date"
                name="date_to"
                value={dateTo}
                className="mt-1 block w-full py-2 px-3 border rounded-lg text-sm bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => handleDateChange("date_to", e.target.value)}
              />
            </div>
          </>
        )}
        <div className="flex items-center space-x-2 m-2 w-3/12">
          <TextInput
            placeholder="ស្វែងរក......"
            value={search}
            onChange={(e) => searchFieldChanged(e.target.value)}
            onKeyPress={onKeyPress}
            className="py-2 w-full"
          />
        </div>
        <button
          onClick={resetFilters}
          className="bg-red-500 px-4 py-2 text-white rounded shadow transition-all hover:bg-red-600"
        >
          <span className="text-sm">កំណត់ឡើងវិញ</span>
        </button>
      </div>
    </div>
  );
}