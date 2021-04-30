import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { DataProvider, MovieProvider, TvShowProvider, CategoryProvider, SearchProvider, DiscoverProvider } from './contexts';

ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
      <SearchProvider>
        <DiscoverProvider>
          <MovieProvider>
            <TvShowProvider>
              <DataProvider>
                <App />
              </DataProvider>
            </TvShowProvider>
          </MovieProvider>
        </DiscoverProvider>
      </SearchProvider>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

