import React from 'react';

const FormattedDate = ({ dateString }) => {
  const date = new Date(dateString);
  
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  
  const formattedDate = date.toLocaleString('en-US', options);

  return (
    <p className="">
      {formattedDate}
    </p>
  );
};

export default FormattedDate;