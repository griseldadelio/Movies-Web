import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Movies, Movie, Categories, Video, Series, Shows, Search } from './Screens';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Footer, SearchBar, NavBar } from './components'

const App = () => {
  return (
    <div className={'main-aside-container'}>
      <BrowserRouter>
        <NavBar />
        <SearchBar />
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

    </div>
  );
}

export default App;







