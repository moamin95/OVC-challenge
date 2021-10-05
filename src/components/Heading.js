import React from 'react';

const Heading = () => {
  const headingStyle = {
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: '20px',
  };

  return <h2 style={headingStyle}>User List</h2>;
};

export default Heading;
