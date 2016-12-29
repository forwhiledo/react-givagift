require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;



import { Provider } from 'react-redux';

import store from './store';
import MainApp from './components/mainapp.js';
import App from './components/app.js'
import ResultsAppContainer from './components/resultsapp.js'
import QuizApp from './components/quizapp.js'

console.log('hello');

var routes = (
    <Router history={hashHistory}>
       <Route path="/" component={App}>
           <IndexRoute component={MainApp} />
            <Route path="/results" component={ResultsAppContainer} />
            <Route path="/quiz" component={QuizApp} />

       </Route>
   </Router>
);


document.addEventListener('DOMContentLoaded', function(){

 ReactDOM.render(

<Provider store={store}>
 {routes}
</Provider>,

   document.getElementById('app'));

});
