import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
  return (
      <div className="col-15 mt-5 text-center">
        <Spinner animation="border" role="status"/>
      </div>
  )
}

export default LoadingSpinner;