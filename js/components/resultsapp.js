

var React = require('react');
var ReactDOM = require('react-dom');
import {connect} from 'react-redux';

import OutterContainer from './outtercontainer.js'

var ResultsApp= React.createClass({



         render:function(){
  console.log(this.props.content1);

           return (

             <div>
              <OutterContainer content={this.props.content1} contentRange={this.props.contentRange1}/>
              <OutterContainer content={this.props.content2} contentRange={this.props.contentRange2}/>
              
              <OutterContainer content={this.props.content3} contentRange={this.props.contentRange3}/>

              </div>



           );
         }
});



var mapStateToProps= function(state){

  console.log(state);

return {
  content1:state.content1,
  content2:state.content2,
  content3:state.content3,
  contentRange1:state.contentRange1,
  contentRange2:state.contentRange2,
  contentRange3:state.contentRange3
}

}

var ResultsAppContainer= connect(mapStateToProps)(ResultsApp)

export default ResultsAppContainer;
