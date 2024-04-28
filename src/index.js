import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Apply dark theme class to body by default
document.body.classList.add('dark-theme');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
