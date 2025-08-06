import React from 'react';
import Select from 'react-select';
import InputLabel from '@/components/InputLabel';
import InputError from '@/components/InputError';

const SelectWithSearch = ({
  id = 'select',
  label,
  placeholder = 'Search and select...',
  options = [],
  value = [],
  onChange,
  errors = {},
  isClearable = true,
  isSearchable = true,
  isMulti = false,
  className = 'mt-1',
  classNamePrefix = 'select',
}) => {
  const selectedValue = isMulti
    ? Array.isArray(value)
      ? value.map(val => options.find(option => option.value == val)).filter(Boolean)
      : []
    : options.find(option => option.value == value) || null;

  return (
    <div>
      {label && <InputLabel htmlFor={id} value={label} />}
      <Select
        id={id}
        name={id}
        options={options}
        value={selectedValue}
        onChange={(selectedOption) => {
          if (isMulti) {
            const newValues = selectedOption ? selectedOption.map(option => option.value) : [];
            onChange(newValues);
          } else {
            onChange(selectedOption ? selectedOption.value : '');
          }
        }}
        className={className}
        classNamePrefix={classNamePrefix}
        placeholder={placeholder}
        isClearable={isClearable}
        isSearchable={isSearchable}
        isMulti={isMulti}
      />
      <InputError message={errors[id]} className="mt-2" />
    </div>
  );
};

export default SelectWithSearch;