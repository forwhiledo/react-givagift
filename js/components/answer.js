

var React = require('react');
var ReactDOM = require('react-dom');
import {connect} from 'react-redux';
import cssStyle from '../css-variables.js'
import {selectAnswer} from '../actions/index.js'




export class Answer extends React.Component {
  constructor(props){
    super(props);
      this.selectedAnswer= this.selectedAnswer.bind(this);

  }

  selectedAnswer(){


       var answerInfo= {

              answerN:this.props.answerId,
              questionN:this.props.questionId,
              points:this.props.points,
       };

     this.props.dispatch(selectAnswer(answerInfo));

  }


  render(){

var selectedCSS='answerButton';

      if(this.props.answerSelected===true){
        if( this.props.answerId == this.props.selectedAnswerInfo.answerN && this.props.questionId == this.props.selectedAnswerInfo.questionN ){
              selectedCSS='selectedAnswerButton';
        } else {
           selectedCSS='answerButton';
        }
      }

    return(

      <div onClick={this.selectedAnswer}  className={ selectedCSS + ' slidefromleft'}>


       <p  style={{marginLeft:'20px'}}> {this.props.letter} . {this.props.answer} </p>


       </div>

    )
  }
}



var mapStateToProps= function(state){

  console.log(state);

      return {
        currentQuestion:state.currentQuestion,
        selectedAnswerInfo:state.selectedAnswerInfo,
        answerSelected:state.answerSelected

      }
}


var AnswerContainer= connect(mapStateToProps)(Answer)

export default AnswerContainer;
