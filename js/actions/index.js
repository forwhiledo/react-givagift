
import { push } from 'react-router-redux';

require('isomorphic-fetch');

export var INITIALIZE_RESULTS= 'INITIALIZE_RESULTS';

 export var intializeResults= function(resultsArray){

        return {
          type:INITIALIZE_RESULTS,
          resultsArray:resultsArray
        };

 };


 export var ARROW_LEFT= 'ARROW_LEFT';

  export var ArrowLeft= function(id){

         return {
           type:ARROW_LEFT,
           id:id
         };
  };



   export var ARROW_RIGHT= 'ARROW_RIGHT';

    export var ArrowRight= function(id){

           return {
             type:ARROW_RIGHT,
             id:id
           };

    };

    export var NEXT_QUESTION= 'NEXT_QUESTION';

     export var NextQuestion= function(currentQuestionIndex){

            return {
              type:NEXT_QUESTION,
               currentQuestionIndex:currentQuestionIndex
            };

     };



       export var LOG_IN='LOG_IN';

       export function LogInUser(data) {

   var fetchData={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({

         username:data.username,
         password:data.password

      })
   };

  return {
    type: LOG_IN,

    promise: fetch('/login', fetchData).then(function(data){

      console.log('logged');
       console.log(data);
       return data.json();

      })
  };
}


 export var SIGN_UP_USER='SIGN_UP_USER';


export function SignUpUser(data) {

var fetchData={
method:'POST',
headers:{
 'Content-Type':'application/json'
},
body:JSON.stringify({

  username:data.username,
  password:data.password

})
};

return {
type: SIGN_UP_USER,
promise: fetch('/users', fetchData).then(function(data){

console.log(data);
return data.json();

})
};
}

export var CALL_AMAZON_CALLS= 'CALL_AMAZON_CALLS'

export function CallAmazonCalls(callArray){

      return {
        type:CALL_AMAZON_CALLS,
        callArray:callArray
      };

}

export var CALL_AMAZON='CALL_AMAZON'

export function CallAmazon(query){
        console.log('amazon was called');
     var url='/amazon/'+query;
     return {
       type:CALL_AMAZON,
       promise: fetch(url).then(function(data){

         return data.json();

       })
     };
}

export var SET_ANSWER_POINTS='SET_ANSWER_POINTS'

export function setAnswerPoints(answerPoints){

        return {
           type:SET_ANSWER_POINTS,
           answerPoints:answerPoints
        };
}

export var SELECT_ANSWER='SELECT_ANSWER'

export function selectAnswer(points){

        return {
           type:SET_ANSWER_POINTS,
          points:points
        };
}
