import React from 'react';
import Main from '../components/Main';
import RestaurantInfo from '../components/RestaurantInfo/RestaurantInfo';
import {Route, Router, hashHistory} from 'react-router';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/:id" component={RestaurantInfo} />
        </Route>
    </Router>
);