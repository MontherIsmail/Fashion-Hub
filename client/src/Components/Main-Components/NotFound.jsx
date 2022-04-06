import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <div className="not-found-container">
        <p className="not-found-message">Page Not Found</p>
        <Link className="back" to="/">
          Back
        </Link>
      </div>
    </>
  );
}

export default NotFound;
