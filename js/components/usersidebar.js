

var React = require('react');
var ReactDOM = require('react-dom');
import {connect} from 'react-redux';
import UserContentContainer from './usercontent.js'
 import cssStyle from '../css-variables.js';
export class UserSideBar extends React.Component{

  constructor(props){
    super(props);
  }


  render(){

    console.log('here is the state');
    console.log(this.props.user.username);

    return (
      <div className='user-side-bar'>
       <div style= {{width:'220px', height:'800px',backgroundColor:cssStyle.white, listStyle:'none', borderRight:'3px solid grey', position:'absolute'}} >
         <ul style={{fontSize:'25px', fontFamily:cssStyle.font2, listStyle:'none', paddingLeft:'0'}}>
         <hr/>

         <li className='darkli'> Friends </li>

         <li> Birthdays</li>

         <li className='darkli'> Events</li>

         <li > Profile</li>

         <li className='darkli'> Setting</li>
         
         </ul>
         </div>

       </div>
    );
  }
}


var mapStateToProps= function(state){
 console.log('state is being called');
 console.log(state);

  return {
    user:state.user,
  }
}

var UserSideBarContainer= connect(mapStateToProps)(UserSideBar);

export default UserSideBarContainer;
