

var React = require('react');
var ReactDOM = require('react-dom');
import ItemContainer from './itemcontainer.js'

var InnerContainer = function(props){

  return(
      <div  className='innercontainer'>
         <p> from {props.contentRange.from} to {props.contentRange.to}  </p>
       <ItemContainer content={props.content} contentRange={props.contentRange}/>
    </div>
  );
};


export default InnerContainer;
