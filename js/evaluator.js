
function evaluator( range , grade , classLength  ){

var N=(range/classLength)

var IndexToArray=[];
var IndexFromArray=[];

for(var i=0 ; i< classLength ; i++ ){

   var IndexTo= N*(i+1);

   var IndexFrom= IndexTo-N;

   IndexToArray.push(IndexTo);

   IndexFromArray.push(IndexFrom);
}

console.log(IndexToArray);
console.log(IndexFromArray);


for(var i=0 ; i< classLength ; i++ ){

   if ( grade <= IndexToArray[i] ){

       console.log(IndexToArray[i]);

       var classIndex= i;
       var IndexRange= IndexToArray[i];
       var indexObject= {
            classIndex:classIndex,
            range:IndexRange
       };

       break

   }
}

	return indexObject
}


export default evaluator;
