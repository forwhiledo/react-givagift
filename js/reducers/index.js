var actions = require('../actions/index');
var resultsArray = require('../results.js');
var questionsArray =  require('../questions.js');
import {INITIALIZE_RESULTS, ARROW_RIGHT, NEXT_QUESTION, LOG_IN, CALL_AMAZON,CALL_AMAZON_CALLS} from '../actions/index';
import {handle} from 'redux-pack';
import cssStyle from '../css-variables.js'


console.log(questionsArray);
var stateDefault = {

    contents: resultsArray,
    currentQuestionIndex:0,
    currentQuestion:questionsArray[0],
    questions: questionsArray,
    styles:cssStyle,
    userImageURL:'http://www.safe-collections.com/images/PNG%20Icons/user148.png'
};



var reducer = function(state, action) {

    state = state || stateDefault;

    switch (action.type) {

      case LOG_IN:


      return handle(state, action, {

        start: s => ({
               ...s,
               isLoading: true,
               fooError: null
             }),
        finish: s => ({ ...s, isLoading: false }),
        failure: s => ({ ...s, userError: action.payload }),
        success: s => ({ ...s,
          user: action.payload
            }),
      });


      case CALL_AMAZON:


        console.log(action);

      return handle(state, action, {

        start: s => ({
               ...s,
               isLoading: true,
               fooError: null
             }),
        finish: s => ({ ...s, isLoading: false }),
        failure: s => ({ ...s, callError: action.payload }),
        success: s => ({ ...s, amazonData: action.payload }),

      });

      case CALL_AMAZON_CALLS:

           state.callArray=action.callArray

           break

        case actions.INITIALIZE_RESULTS:

            for (var i = 0; i < resultsArray.length; i++) {

                state.contents[i] = resultsArray[i];

                  console.log( 'staaate',state.contents[i]);
                if(state.contents[i].length< 5){

                  state.contents[i].range = {
                      from: 0,
                      to: state.contents[i].length
                  };
                }

                else {

                  state.contents[i].range = {
                      from: 0,
                      to: 5
                  };
                }
            }
            break;

        case actions.ARROW_RIGHT:

            var range = state.contents[action.id].range;
               var slicedContent= state.contents[action.id].slice(state.contents[action.id].range.from+5, state.contents[action.id].range.to+5);
                var remainer= 5-slicedContent.length;


                console.log('here is remaindeeeeeer'+ remainer);
                if(state.contents[action.id].length < 5){
                  return
                }
                else if(remainer==5){
                  state.contents[action.id].range = {
                      from:0,
                      to: remainer
                  };
                }
                else{

                  state.contents[action.id].range = {
                      from: range.to,
                      to: range.to+5-remainer
                  };

                }

             state.contents = state.contents.slice(0)

              break;

              case actions.ARROW_LEFT:



                  var range = state.contents[action.id].range;
                  var slicedLeft= state.contents[action.id].slice(state.contents[action.id].range.from-5, state.contents[action.id].range.to-5);

                  if (slicedLeft.length===0){

                      if(state.contents[action.id].length%5===0){

                        state.contents[action.id].range = {
                            from: state.contents[action.id].length-5,
                            to: state.contents[action.id].length
                          };
                      }
                      else {

                        state.contents[action.id].range = {
                            from: state.contents[action.id].length-(state.contents[action.id].length%5),
                            to: state.contents[action.id].length
                              };

                      }




                  } else {

                    state.contents[action.id].range = {
                        from: range.from-5,
                        to: range.from
                    };

                  }

                   state.contents = state.contents.slice(0)

                    break;



            case actions.NEXT_QUESTION:

          state.currentQuestion= questionsArray[action.currentQuestionIndex+1];
          state.currentQuestionIndex= action.currentQuestionIndex+1;

            break;
        }

      // return Object.assign({}, state, {contents:state.contents.slice(0)});
      return {...state}
};



export default reducer;
