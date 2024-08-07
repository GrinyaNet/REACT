import React from 'react';
import Product from './Product.jsx';
import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min.js';

function Products({ match }) {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/book`}>Book</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/ball`}>Ball</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={match.url}>
          <span>Select a product please</span>
        </Route>
        <Route path={`${match.url}/:productId`} component={Product}></Route>
      </Switch>
    </div>
  );
}

export default Products;
