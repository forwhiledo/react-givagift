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
import AppContainer from './components/app.js'
import ResultsAppContainer from './components/resultsapp.js'
import QuizApp from './components/quizapp.js'
import SignupLogin from './components/signup-login.js'
import SignUp from './components/sign-up.js'
import UserDashboardContainer from './components/userdashboard.js'
import UserSideBarContainer from './components/usersidebar.js'
import QuizInfoContainer from './components/quizinfo.js'

console.log('test41');

var routes = (
    <Router history={hashHistory}>
       <Route path="/" component={AppContainer}>

           <IndexRoute component={MainApp} />
            <Route path="/results" component={ResultsAppContainer} />
            <Route path="/quizinfo" component={QuizInfoContainer} />
              <Route path="/quiz" component={QuizApp} />
            <Route path="/signup-login" component={SignupLogin}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/userdashboard" component={UserDashboardContainer}/>
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
