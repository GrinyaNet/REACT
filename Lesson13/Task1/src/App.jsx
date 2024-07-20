import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Contacts from './Contacts.jsx';
import Products from './Products.jsx';
import Home from './Home.jsx';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min.js';
import PageNotFound from './PageNotFound.jsx';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
