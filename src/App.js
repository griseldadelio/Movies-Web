import React, { useEffect, useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Movies, Movie, Categories, Video, Series, Shows, Search } from './Screens';
import firebase from './configs/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Footer, SearchBar, NavGuest, NavAuth } from './components'

import UserContext from './contexts/User/UserContext';
import FavsContext from './contexts/Favorite/FavsContext';



const App = () => {
  const { user, setUser } = useContext(UserContext);
  const { updateSeriesFavs, updateMovieFavs } = useContext(FavsContext);

  useEffect(() => {
    const unsuscribe = firebase
      .auth()

      .onAuthStateChanged((user) => {
        setUser(user);
      });

    return () => unsuscribe();
  }, [setUser]);

  useEffect(() => {
    updateSeriesFavs(user);
    updateMovieFavs(user);
  }, [user, updateMovieFavs, updateSeriesFavs]);

  return (
    <>
      <BrowserRouter>
        <SearchBar />
        {user ? <NavAuth /> : <NavGuest />}
        <Switch>
          <Route exact path="/:media/category/:category" component={Categories} />
          <Route exact path="/movie" component={Movies} />
          <Route path="/movie/:movieId" component={Movie} />
          <Route exact path="/video/:media/:id" component={Video} />
          <Route exact path="/tv" component={Series} />
          <Route path="/tv/:TVId" component={Shows} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;







