

var React = require('react');
var ReactDOM = require('react-dom');
import InnerContainer from './innercontainer.js'

var OutterContainer= function(props){
  console.log(props.content);
  return (
    <div className='outtercontainer'>

      <i className="fa fa-chevron-left arrow-left" aria-hidden="true" ></i>

    <InnerContainer content={props.content} contentRange={props.contentRange}/>

      <i className="fa fa-chevron-right arrow-right" aria-hidden="true"></i>
    </div>
  );
};







export default OutterContainer;
