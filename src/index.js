import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router.js'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet" />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
