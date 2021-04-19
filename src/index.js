import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "./contexts/ThemeContext";
import { SearchProvider } from "./contexts/SearchContext";

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

