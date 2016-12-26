require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

import { Provider } from 'react-redux';

import store from './store';

import MainApp from './components/mainapp.js';

console.log('hello');

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={MainApp} />
    </Router>
);


document.addEventListener('DOMContentLoaded', function(){

 ReactDOM.render(

<Provider store={store}>
 {routes}
</Provider>,

   document.getElementById('app'));

});
