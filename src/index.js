import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/index.css'

import { DataProvider, MovieProvider, TvShowProvider, CategoryProvider, UserProvider, FavsProvider, SearchProvider, DiscoverProvider } from './contexts';

ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
      <SearchProvider>
        <DiscoverProvider>
          <UserProvider>
            <FavsProvider>
              <MovieProvider>
                <TvShowProvider>
                  <DataProvider>
                    <App />
                  </DataProvider>
                </TvShowProvider>
              </MovieProvider>
            </FavsProvider>
          </UserProvider>
        </DiscoverProvider>
      </SearchProvider>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

