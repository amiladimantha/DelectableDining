import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = document.getElementById("root");
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(rootElement);