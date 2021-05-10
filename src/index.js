import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { DataProvider, MovieProvider, TvShowProvider, CategoryProvider } from './contexts';

ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
      <MovieProvider>
        <TvShowProvider>
          <DataProvider>
            <App />
          </DataProvider>
        </TvShowProvider>
      </MovieProvider>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

