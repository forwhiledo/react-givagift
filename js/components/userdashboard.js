

var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var IndexRoute = router.IndexRoute;
import {push} from 'react-router-redux';
import {hashHistory} from 'react-router';

import {connect} from 'react-redux';
import UserContentContainer from './usercontent.js'
import UserSideBarContainer from './usersidebar.js'
var content="";
var sidebar="";


export class UserDashboard extends React.Component{

  constructor(props){
    super(props);
  }


  render(){

    if(!this.props.user){
        console.log('NOOOO USSSSEEER');
      hashHistory.push('/signup-login');
    } else {


     content =(
            <div>
            <UserContentContainer/>
            </div>
      )

      sidebar= (
        <div style={{float:'left'}}>
        <UserSideBarContainer/>
        </div>
      )

    }

    return (


        <div className="fadeinslow">

        {sidebar}

         {content}

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
