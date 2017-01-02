

var React = require('react');
var ReactDOM = require('react-dom');
import {connect} from 'react-redux';
 import cssStyle from '../css-variables.js';
import loremipsum from '../loremipsum.js'
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var Link = router.Link;

export class UserContent extends React.Component{

  constructor(props){
    super(props);
  }


  render(){

    var buttonStyle= {
    fontSize:'17px',
    width: "200px",
    height:"40px",
    display:'block',
    backgroundColor: cssStyle.pink,
    border: "0px",
    borderRadius:"5px",
    fontFamily:cssStyle.baloo,
    color:cssStyle.white,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'30px'
    };


    console.log('here is the state');
    console.log(this.props.user.username);

    return (

      <div style={{backgroundColor:cssStyle.light_black , height:'1000px', marginLeft:'220px' }}>
         <div style={{ paddingTop:'20px', width:'1100px', height:'800px', marginLeft:'auto', marginRight:'auto', backgroundColor:cssStyle.light_black, overflow:'scroll'}} >
        <h1 style={{textAlign:'center', marginTop:'0px', marginBottom:'20px', fontSize:'18px', color:'white'}}>Welcome {this.props.user.username} !</h1>
       <img style={{margin:'10px', width:'140px', display:'block',borderRadius:'50%', border:'2px solid white',  marginLeft:'auto', marginRight:'auto'}} src={this.props.userImageURL} />

       <Link to='/quiz' >
         <button style={buttonStyle} >Create New Quiz!</button>
         </Link>
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
    userImageURL:state.userImageURL
  }
}

var UserContentContainer= connect(mapStateToProps)(UserContent);

export default UserContentContainer;
