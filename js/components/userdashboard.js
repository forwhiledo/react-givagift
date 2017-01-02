

var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

import {connect} from 'react-redux';
import UserContentContainer from './usercontent.js'
import UserSideBarContainer from './usersidebar.js'
export class UserDashboard extends React.Component{

  constructor(props){
    super(props);
  }


  render(){

    console.log('here is the state');
    console.log(this.props.user.username);
    return (

        <div>
        <div style={{float:'left'}}>
        <UserSideBarContainer/>
        </div>
        <UserContentContainer/>
        </div>

    );
  }
}


var mapStateToProps= function(state){
 console.log('state is being called');
 console.log(state);

  return {
    user:state.user,
    userImageURL:state.userImageURL
  }
}

var UserDashboardContainer= connect(mapStateToProps)(UserDashboard);

export default UserDashboardContainer;
