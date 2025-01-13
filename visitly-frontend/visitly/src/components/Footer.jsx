import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    fontSize: '14px',
    color: '#fff',
    background: '#6200ea',
  };

  const containerStyle = {
    minHeight: '70vh',
    position: 'relative',
    paddingBottom: '50px', 
    boxSizing: 'border-box',
  };

  return (
    <div style={containerStyle}>
      <footer style={footerStyle}>
        <p>
          This interface is created for assignment purposes and is a trial version. A refined and enhanced version can be developed in the future.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
