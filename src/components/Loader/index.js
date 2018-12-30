import React from 'react';
import loaderSrc from '../../assets/logo.svg';
import './index.css';

const Loader = props => (
  <div>
    <img className="load-icon" alt="loading icon" src={loaderSrc}></img>
  </div>
)

export default Loader;