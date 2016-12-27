

var React = require('react');
var ReactDOM = require('react-dom');
import QuestionContainer from './question.js';
import AnswersBoxContainer from './answersbox.js'
import {connect} from 'react-redux';
import {NextQuestion} from '../actions/index.js'


export class Outterbox extends React.Component {
        constructor(props){
          super(props);
          this.nextQuestion= this.nextQuestion.bind(this);
        }

        nextQuestion(){
          console.log(this.props.currentQuestionIndex);
            this.props.dispatch(NextQuestion(this.props.currentQuestionIndex));
        }
         render(){

           return(
                <div className='outterbox'>
                     <QuestionContainer/>
                     <AnswersBoxContainer/>
                     <button onClick={this.nextQuestion}>next</button>
                 </div>
           );
         }
}


var mapStateToProps= function(state){
   return {
      currentQuestionIndex:state.currentQuestionIndex
   }
}

var OutterboxContainer= connect(mapStateToProps)(Outterbox)

export default OutterboxContainer;
