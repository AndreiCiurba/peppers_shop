import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css';  // Now this is within the src/ directory


import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);