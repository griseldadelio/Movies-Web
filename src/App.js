import React, { useEffect, useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Movies, Categories, Video, Series, Shows } from './Screens';
import firebase from './configs/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Footer, SearchBar, NavGuest, NavAuth } from './components'

import UserContext from './contexts/UserContext';
import FavsContext from './contexts/FavsContext';



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
  }, []);

  useEffect(() => {
    updateSeriesFavs(user);
    updateMovieFavs(user);
  }, [user]);

  return (
    <>
      <BrowserRouter>
        <SearchBar />
        {user ? <NavAuth /> : <NavGuest />}
        <Switch>
          <Route exact path="/:media/category/:category" component={Categories} />
          <Route exact path="/movie" component={Movies} />
          <Route exact path="/video/:media/:id" component={Video} />
          <Route exact path="/tv" component={Series} />
          <Route path="/tv/:TVId" component={Shows} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;







