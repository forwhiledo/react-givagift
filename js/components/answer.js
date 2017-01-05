

var React = require('react');
var ReactDOM = require('react-dom');
import {connect} from 'react-redux';
import cssStyle from '../css-variables.js'


export class Answer extends React.Component {
  constructor(props){
    super(props);
      this.selectedAnswer= this.selectedAnswer.bind(this);
  }

  selectedAnswer(){
      console.log('answer number was'+ this.props.answerId +'from question'+ this.props.questionId);

  }


  render(){

    var answerButton= {
      fontSize:'20px',
      width: "500px",
      height:"40px",
      display:'block',
      backgroundColor:cssStyle.white,
      border: "2px solid #FF6D6D",
      borderRadius:"5px",
      fontFamily:cssStyle.baloo,
      color:cssStyle.dark_grey,
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:'30px'
    };

    return(
      <div className='answersbox' style={answerButton}>
       <p  style={{marginLeft:'20px'}}s> {this.props.letter} . {this.props.answer} </p>
       </div>
    )
  }
}



var mapStateToProps= function(state){
      return {
        currentQuestion:state.currentQuestion
      }
}


var AnswerContainer= connect(mapStateToProps)(Answer)

export default AnswerContainer;
