

var React = require('react');
var ReactDOM = require('react-dom');
import {connect} from 'react-redux';

import OutterContainer from './outtercontainer.js'

var ResultsApp= React.createClass({



         render:function(){

          
              console.log(this.props.contents);


          var OutterContainerArray=[];

           for(var i=0; i<this.props.contents.length; i++){

              OutterContainerArray.push(<OutterContainer content={this.props.contents[i]} contentRange={this.props.contents[i].range} />)

           }

  console.log(this.props.content1);

           return (

             <div>
                 {OutterContainerArray}
              </div>



           );
         }
});



var mapStateToProps= function(state){

  console.log(state);

return {
  contents:state.contents
}

}

var ResultsAppContainer= connect(mapStateToProps)(ResultsApp)

export default ResultsAppContainer;
