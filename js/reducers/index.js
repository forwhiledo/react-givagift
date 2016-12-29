var actions = require('../actions/index');
var resultsArray = require('../results.js');
var questionsArray =  require('../questions.js');
import {INITIALIZE_RESULTS, ARROW_RIGHT, NEXT_QUESTION} from '../actions/index'

console.log(questionsArray);
var stateDefault = {
    contents: resultsArray,
    currentQuestionIndex:0,
    currentQuestion:questionsArray[0],
    questions: questionsArray

};



var reducer = function(state, action) {

    state = state || stateDefault;



    switch (action.type) {

        case actions.INITIALIZE_RESULTS:

            for (var i = 0; i < resultsArray.length; i++) {

                state.contents[i] = resultsArray[i];

                state.contents[i].range = {

                    from: 0,
                    to: 5

                };
            }
            break;

        case actions.ARROW_RIGHT:

            var range = state.contents[action.id].range;
               var slicedContent= state.contents[action.id].slice(state.contents[action.id].range.from+5, state.contents[action.id].range.to+5);
                var remainer= 5-slicedContent.length;

                console.log('here is remainer'+ remainer);

                if(remainer==5){
                  state.contents[action.id].range = {
                      from: 0,
                      to: 5
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
                  console.log('here is slicedleftuuyy' +slicedLeft.length);

                  if (slicedLeft.length===0){

                      console.log('ITS ZEROpps');

                    state.contents[action.id].range = {
                        from: state.contents[action.id].length-(state.contents[action.id].length%5),
                        to: state.contents[action.id].length
                    };
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
