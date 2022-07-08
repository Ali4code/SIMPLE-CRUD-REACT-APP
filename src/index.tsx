import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppThemeProvider from "./provider/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppThemeProvider>
    <App />
  </AppThemeProvider>
);
