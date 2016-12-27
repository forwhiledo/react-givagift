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

            state.contents[action.id].range = {

                from: range.to,
                to: range.to+5

            };
              break;

          case actions.NEXT_QUESTION:

        state.currentQuestion= questionsArray[action.currentQuestionIndex+1];
        state.currentQuestionIndex= action.currentQuestionIndex+1;
          break;
      }

    return {...state};

};



export default reducer;
