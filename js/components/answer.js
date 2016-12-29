

var React = require('react');
var ReactDOM = require('react-dom');
import {connect} from 'react-redux';


export class Answer extends React.Component {
  constructor(props){
    super(props);
      this.selectedAnswer= this.selectedAnswer.bind(this);
  }

  selectedAnswer(){
      console.log('answer number was'+ this.props.answerId +'from question'+ this.props.questionId);
       
  }


  render(){

    return(
      <div className='answersbox'>
       <li className='answer-list' onClick={this.selectedAnswer} > {this.props.letter} . {this.props.answer}</li>
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
