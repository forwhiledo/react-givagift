
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
import cssStyle from '../css-variables.js';
import {connect} from 'react-redux';
var Link = router.Link;
import {LogInUser} from '../actions/index.js'
import {push} from 'react-router-redux'
import {hashHistory} from 'react-router'

export class SignupLogin extends React.Component {

    constructor(props){
      super(props);

      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleChangeEmail=this.handleChangeEmail.bind(this);
      this.handleChangePassword=this.handleChangePassword.bind(this);
    }



    handleSubmit(event){

      event.preventDefault();
      console.log(this.state);
      let signUpData= this

      this.props.dispatch(LogInUser(this.state)).then(function(){


          if(signUpData.state.username){
            console.log('somethinghere');
              hashHistory.push('/userdashboard');
          }

      });


    }

    handleChangeEmail(event){

      this.setState({username:event.target.value});
      console.log(this.state);
    }

    handleChangePassword(event){

      this.setState({password:event.target.value});
    }

      render(){

          var sign_in= {

          fontFamily:cssStyle.font4,
          fontSize: "16px",
          backgroundColor: cssStyle.white,
          width: "600px",
          height:"550px",
          border:"3px solid"+cssStyle.pink,
          borderRadius:'2pc',
          color:cssStyle.light_black,
          marginTop:"50px",
          marginLeft:"auto",
          marginRight:"auto"
          };

          var  h1Style= {
          fontSize:'50px',
          fontFamily: cssStyle.baloo,
          textAlign: "center"

          };


          var  h2Style= {
          fontSize:'30px',
          fontFamily: cssStyle.font3,
          textAlign: "center"
          };

          var buttonDiv={
          height:'400px',
          width:'700px'
          };

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

        return(

    <div style={sign_in}>

    <div style={{
    marginTop:'30px',
    width:'600px',
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom:'20px'}}>

    <form onSubmit={this.handleSubmit} >

    <h4 style={{fontSize:'20px', marginLeft:'30px',  color:cssStyle.light_black }}>Username:</h4>
    <input onChange={this.handleChangeEmail}  style={{ color:'black',marginLeft:'30px', width:'500px'}}  name="name" id="login-email-input" placeholder="ex:CanadianPilot1234" required/>

    <h4 style={{fontSize:'20px',  color:cssStyle.light_black , marginLeft:'30px'}}>Password:</h4>
    <input  onChange={this.handleChangePassword} style={{ color:'black', width:'500px', marginLeft:'30px'}} type="password" name="name" placeholder="ex:gitin123" id="login-password-input" required/>
      <input type="submit"  style={buttonStyle} value="Log in"/>
    </form>
      <button style={buttonStyle}>Guest Log In</button>
    </div>



    <div style={{
    marginTop:'30px',
    width:'400px',
    marginLeft:'auto',
    marginRight:'auto'}}>


  <h2 style=
    {{fontSize:'13px',
    textAlign:'center',
    marginLeft:"auto",
    marginRight:"auto",}}
    >  Forgot Password?   </h2>


      <Link to={'/signup'}>
    <h2 style=
    {{fontSize:'20px',
    marginLeft:"auto",
    textAlign:'center',
    marginRight:"auto",
    color:cssStyle.dark_grey}} >Sign Up !</h2>
    </Link>

    </div>
    </div>

        );

      }
}

var mapStateToProps= function(state){

  return {
  contents:state.contents,
  user:state.user
  }

}

var SignUpLoginContainer= connect(mapStateToProps)(SignupLogin);



export default SignUpLoginContainer;
