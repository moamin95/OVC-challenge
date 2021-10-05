import React from 'react';

const Loading = ({ error }) => {
  const loadingStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  };

  return error ? (
    <h3>{error.message}</h3>
  ) : (
    <h3 style={loadingStyle}>Loading...</h3>
  );
};

export default Loading;
