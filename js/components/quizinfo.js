
var React = require('react');
var ReactDOM = require('react-dom');
import cssStyle from '../css-variables.js'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {hashHistory} from 'react-router'



export class QuizInfo extends React.Component {

  constructor(props){
       super(props);
      this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
       console.log('Submitted!Quixz');
         hashHistory.push('/quiz');
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
    backgroundColor: cssStyle.green,
    border: "0px",
    borderRadius:"5px",
    fontFamily:cssStyle.baloo,
    color:cssStyle.white,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'30px'
    };

    var quizLine= {
        marginBottom:'30px'
    };

    var s = '\'s';

    return(

      <div className='sign_in fadeinslow'>

      <div style={{
      marginTop:'30px',
      width:'600px',
      marginLeft:'auto',
      marginRight:'auto',
      marginBottom:'20px'}}>

      <form onSubmit={this.handleSubmit} >
<div style={quizLine}>
      <h4 style={{fontSize:'30px', marginTop:'0',marginLeft:'30px', float:'left', marginRight:'10px', color:cssStyle.light_black }}>My</h4>
          <select style={{marginTop:'10px'}}>
          <option value="friend">Friend{s}</option>
          <option value="saab">Family Memeber{s}</option>
          <option value="mercedes">Girlfriend or Boyfriend{s}</option>
          <option value="audi">Pet{s}</option>
          </select>
          <br/>
</div>
<div style={quizLine}>
      <h4 style={{fontSize:'30px',  color:cssStyle.light_black , marginLeft:'30px',  float:'left' , marginTop:'0' , marginRight:'10px'}}> name is </h4>
          <input  onChange={this.handleChangePassword} style={{ marginTop:'10px' ,color:'black',textAlign:'center', width:'300px', marginLeft:'30px', display:'block'}} type="text" name="name" placeholder="ex:Kelly" id="login-password-input" required/>
</div>
<h4 style={{fontSize:'30px',  color:cssStyle.light_black , marginLeft:'30px',  float:'left' , marginTop:'0'}}> And </h4>
<div style={{marginBottom:'30px' , marginLeft:'100px'}}>
          <select style={{float:'left', marginTop:'10px'}} >
          <option value="friend">She is</option>
          <option value="saab">He is</option>
          <option value="mercedes">It is</option>
          </select>

          <input  onChange={this.handleChangePassword} style={{ marginTop:'10px', marginLeft:'10px' ,color:'black', width:'60px', marginLeft:'30px', display:'block', float:'left'}} type="number" name="name" placeholder="ex:Kelly" id="login-password-input" required/>
  <h4 style={{fontSize:'30px',  color:cssStyle.light_black , marginLeft:'30px',  float:'left' , marginTop:'0'}}>years old. </h4>
</div>
   <br/>
 <br/>
  <br/>
   <br/>

        <input type="submit"  style={buttonStyle} value="Begin Quiz"/>

      </form>

      </div>
      </div>

    );
  }
}


var mapStateToProps = function(state){
      return {
        user:state.user
      }
}

   var QuizInfoContainer= connect(mapStateToProps)(QuizInfo);

   export default QuizInfoContainer;
