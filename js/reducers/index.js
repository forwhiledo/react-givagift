var actions = require('../actions/index');
var resultsArray=require('../results.js');




var stateDefault = {
  contents:resultsArray
};

var reducer= function(state,action){

  state = state || stateDefault;

  for(var i=0; i<resultsArray.length; i++){

      state.contents[i]=resultsArray[i];

      state.contents[i].range={
          from:0,
          to:5
      };
  }

  return state;




};



export default reducer;
