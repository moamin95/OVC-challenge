import React from 'react';
import './styles/loading.css';

const Loading = ({ error }) => {
  return error ? (
    <h3 data-testid='error-1'>{error.message}</h3>
  ) : (
    <h3 data-testid='loading-1' className='loading-header'>
      Loading...
    </h3>
  );
};

export default Loading;
