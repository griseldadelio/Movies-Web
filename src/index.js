import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { DataProvider, MovieProvider, TvShowProvider, CategoryProvider, SearchProvider } from './contexts';

ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
      <SearchProvider>
        <MovieProvider>
          <TvShowProvider>
            <DataProvider>
              <App />
            </DataProvider>
          </TvShowProvider>
        </MovieProvider>
      </SearchProvider>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

