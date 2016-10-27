import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './config/store';
import router from './config/router';

ReactDOM.render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('app')
);