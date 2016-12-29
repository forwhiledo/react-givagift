

var React = require('react');
var ReactDOM = require('react-dom');
import {connect} from 'react-redux';
import Answer from './answer.js'


export class AnswersBox extends React.Component {
  constructor(props){
    super(props);

  }

  render(){


      var AnswerList=[];

        var alternatives=['a','b','c','d','e' ];

      for( var i=0; i< this.props.currentQuestion.listOfAnswers.length; i++){
          AnswerList.push( <Answer answerId={i} questionId={this.props.currentQuestionIndex} letter={alternatives[i]} answer={this.props.currentQuestion.listOfAnswers[i].Answer}/>);
      }

    return(
      <div className='answersbox'>
       <ul>
         {AnswerList}
         </ul>
       </div>
    )
  }
}



var mapStateToProps= function(state){

      return {
        currentQuestion:state.currentQuestion,
        currentQuestionIndex:state.currentQuestionIndex
      }
}


var AnswersBoxContainer= connect(mapStateToProps)(AnswersBox)

export default AnswersBoxContainer
