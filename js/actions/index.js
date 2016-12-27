

require('isomorphic-fetch');

export var INITIALIZE_RESULTS= 'INITIALIZE_RESULTS';

 export var intializeResults= function(){

        return {
          type:INITIALIZE_RESULTS
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
