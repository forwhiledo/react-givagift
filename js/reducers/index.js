var actions = require('../actions/index');
var resultsArray=require('../results.js');




var stateDefault = {

content1:resultsArray[0],
content2:resultsArray[1],
content3:resultsArray[2],

contentRange1:{
     from:0,
     to:5
},
contentRange2:{
     from:0,
     to:5
},
contentRange3:{
     from:0,
     to:5
}
};

var reducer= function(state,action){

  state = state || stateDefault;

  return state;


};



export default reducer;
