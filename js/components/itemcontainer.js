
var React = require('react');
var ReactDOM = require('react-dom');
import Item from './item.js'
import resultsArray from '../results.js'




var ItemContainer = function(props){
      console.log(props.contentRange.from);

  var array=[];

  var slicedContent = props.content.slice(props.contentRange.from, props.contentRange.to);

  console.log(slicedContent);

  for( var i=0; i< slicedContent.length ; i++){

    array.push( <Item content={slicedContent[i]}/> )

  }

  return(

    <div>
       {array}
    </div>

  );

};



export default ItemContainer;
