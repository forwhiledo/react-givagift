
var React = require('react');
var ReactDOM = require('react-dom');
import Itemdiv from './item.js'
import resultsArray from '../results.js'
import {connect} from 'react-redux'




var ItemContainer = function(props){


  var array=[];

  var slicedContent = props.contents[props.id].slice(props.contents[props.id].range.from, props.contents[props.id].range.to);

  console.log(slicedContent);

  for( var i=0; i< slicedContent.length ; i++){

    array.push( <Itemdiv  itemid={i} id={props.id}/> )

  }

  return(

    <div>
       {array}
    </div>

  );

};


var mapStateToProps= function(state){

  console.log(state);
return {
  contents: state.contents
}

}


var ItemContainerContainer= connect(mapStateToProps)(ItemContainer)

export default ItemContainerContainer;
