import React from 'react';
import User from './User.jsx';
import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min.js';

function Users({ match }) {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/Github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/Facebook`}>Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={match.url}>
          <span>Select a user please</span>
        </Route>
        <Route path={`${match.url}/:userId`} component={User}></Route>
      </Switch>
    </div>
  );
}

export default Users;
