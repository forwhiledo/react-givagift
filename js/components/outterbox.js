

var React = require('react');
var ReactDOM = require('react-dom');
import QuestionContainer from './question.js';
import AnswersBoxContainer from './answersbox.js';
import {connect} from 'react-redux';
import {NextQuestion, CallAmazon, CallAmazonCalls, intializeResults, SubmitAnswerPoints, GetMax } from '../actions/index.js'
import cssStyle from '../css-variables.js';
import {push} from 'react-router-redux';
import {hashHistory} from 'react-router';
import gradeGetter from '../gradegetter.js'
import evaluator from '../evaluator.js'

var results=['lifx','starwars','bananas'];
var callArray=[];
var ItemInfo;
var ItemsArray;

export class Outterbox extends React.Component {

        constructor(props){
          super(props);
          this.nextQuestion= this.nextQuestion.bind(this);

        }


        nextQuestion(){


          var ArrayOfPoints=this.props.answerPoints;
          var maxpoint= Math.max(...ArrayOfPoints);

          this.props.dispatch(SubmitAnswerPoints(this.props.selectedAnswerInfo.points));
          this.props.dispatch(GetMax(maxpoint));


              if(this.props.currentQuestionIndex+1==this.props.questions.length){

                console.log(results.length);

              var grade= gradeGetter(this.props.submittedPoints, this.props.maxPoints);

              var ClassN= evaluator(100, grade , 4);
              var SubClassN= evaluator( ClassN.range , grade,6 );
              var ItemN= evaluator( SubClassN.range , grade ,30);

              console.log('here are the class index', ClassN, SubClassN , ItemN);


                for(var i=0; i<results.length; i++){

                var dis=this;
                                                 //1-3
                  this.props.dispatch(CallAmazon(results[i])).then(function(){

                        console.log(dis.props.amazonData.length);

                   ItemsArray=[];
                                                 //10
                         for(i=0; i<dis.props.amazonData.length; i++){

                            var price;

                                 if( typeof dis.props.amazonData[i].OfferSummary[0].LowestNewPrice == 'undefined') {

                                  console.log(dis.props.amazonData[i].OfferSummary[0].LowestUsedPrice[0].FormattedPrice[0]);
                                console.log( 'its undefined');

                                  price=dis.props.amazonData[i].OfferSummary[0].LowestUsedPrice[0].FormattedPrice[0];

                                } else {

                                  price= dis.props.amazonData[i].OfferSummary[0].LowestNewPrice[0].FormattedPrice[0];
                                  console.log('it has');
                                    console.log(price);
                                }


                             ItemInfo={
                              "LowestNewItemPrice":price,
                              "titleOfItem":dis.props.amazonData[i].ItemAttributes[0].Title[0],
                              "picLink":dis.props.amazonData[i].LargeImage[0].URL[0],
                              "buyLink":dis.props.amazonData[i].DetailPageURL[0],
                            };
                             ItemsArray.push(ItemInfo);
                         }


                          console.log('here is the ItemsArray:',ItemsArray);
                          console.log(dis.props);

                          callArray.push(ItemsArray);
                          console.log('here is the callArray:', callArray);

                  }).then(function(){

                    if(callArray.length==results.length){

                        console.log('It Should End Here');

                        dis.props.dispatch(CallAmazonCalls(callArray));
                        dis.props.dispatch(intializeResults(callArray));
                        hashHistory.push('/results');
                    }

                  });


                } //end of for

                    console.log('end of function');


              } else {

                 this.props.dispatch(NextQuestion(this.props.currentQuestionIndex));

               }

            console.log('YEAAAHHOOooooOOOOOOOOOOO');

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
  console.log(state);
   return {
      currentQuestionIndex:state.currentQuestionIndex,
    amazonData:state.amazonData,
    questions:state.questions,
    selectedAnswerInfo:state.selectedAnswerInfo,
    answerPoints:state.answerPoints,
    submittedPoints:state.submittedPoints,
    maxPoints:state.maxPoints

   }
}

var OutterboxContainer= connect(mapStateToProps)(Outterbox)

export default OutterboxContainer;
