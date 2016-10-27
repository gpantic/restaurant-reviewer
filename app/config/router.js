import React from 'react';
import Main from '../components/Main';
import {Route, Router, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/(:id)" component={Main} />
    </Router>
);