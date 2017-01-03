

var React = require('react');
var ReactDOM = require('react-dom');
import QuestionContainer from './question.js';
import AnswersBoxContainer from './answersbox.js'
import {connect} from 'react-redux';
import {NextQuestion} from '../actions/index.js'
 import cssStyle from '../css-variables.js';

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

               var answerButton= {
                 fontSize:'20px',
                 width: "700px",
                 height:"50px",
                 display:'block',
                 backgroundColor:cssStyle.pink,
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


           return(


                <div style={sign_in}>

                <div style={{
                marginTop:'30px',
                width:'600px',
                marginLeft:'auto',
                marginRight:'auto',
                marginBottom:'20px'}}>

                     <QuestionContainer/>
                     <AnswersBoxContainer/>
                     <button style={buttonStyle} onClick={this.nextQuestion}>next</button>

                 </div>
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
