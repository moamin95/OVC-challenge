import React from 'react';
import './styles/loading.css';

const Loading = ({ error }) => {
  return error ? (
    <h3>{error.message}</h3>
  ) : (
    <h3 classsName='loading-header'>Loading...</h3>
  );
};

export default Loading;
