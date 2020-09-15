import React from 'react';
import './style/style.scss';

const Loader = () => (
  <div className="spinner">
    <svg className="spinner__svg-icon" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle className="spinner__svg-path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
    </svg>
  </div>
);

export default Loader;
