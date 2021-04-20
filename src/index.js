import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { DataProvider } from './contexts/DataContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { MovieProvider } from './contexts/MovieContext';
import { TvShowProvider } from './contexts/TvShowContext';
import { PaginationProvider } from './contexts/PaginationContext';
import { CategoryProvider } from './contexts/CategoryContext';
import { UserProvider } from './contexts/UserContext';
import { FavsProvider } from './contexts/FavsContext';
import { SearchProvider } from './contexts/SearchContext'


ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
      <PaginationProvider>
        <SearchProvider>
          <UserProvider>
            <FavsProvider>
              <MovieProvider>
                <TvShowProvider>
                  <DataProvider>
                    <ThemeProvider>
                      <App />
                    </ThemeProvider>
                  </DataProvider>
                </TvShowProvider>
              </MovieProvider>
            </FavsProvider>
          </UserProvider>
        </SearchProvider>
      </PaginationProvider>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

