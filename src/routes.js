import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import UsersBlank from './components/users/blank.js';
import UsersIndex from './components/users/index.js';
import UsersShow from './components/users/show.js';
import UsersNew from './components/users/new.js';
import UsersEdit from './components/users/edit.js';
import UsersDelete from './components/users/delete.js';

const Routes = () => (
  <div className="row">
    <div className="col-md-4">
      <Route exact path="/" render={() => <Redirect to="/users" /> } />
      <Route path="/users" component={UsersIndex} />
    </div>
    <div className="col-md-8">
      <Switch>
        <Route exact path="/users" component={UsersBlank} />
        <Route exact path="/users/new" component={UsersNew} />
        <Route exact path="/users/:id" component={UsersShow} />
        <Route exact path="/users/:id/edit" component={UsersEdit} />
        <Route exact path="/users/:id/delete" component={UsersDelete} />
      </Switch>
    </div>
  </div>
);

export default Routes;
