

var React = require('react');
var ReactDOM = require('react-dom');
import {connect} from 'react-redux';
import Answer from './answer.js'


export class AnswersBox extends React.Component {
  constructor(props){
    super(props);

  }

  render(){

    console.log(this.props.currentQuestion);
      console.log(this.props.currentQuestion.listOfAnswers);
      var AnswerList=[];

      console.log(this.props.currentQuestion.listOfAnswers[0].Answer);
        console.log(this.props.currentQuestion.listOfAnswers.length);
        var alternatives=['a','b','c','d','e' ];

      for( var i=0; i< this.props.currentQuestion.listOfAnswers.length; i++){
          AnswerList.push( <Answer letter= {alternatives[i]} answer={this.props.currentQuestion.listOfAnswers[i].Answer}/>);
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
        currentQuestion:state.currentQuestion
      }
}


var AnswersBoxContainer= connect(mapStateToProps)(AnswersBox)

export default AnswersBoxContainer
