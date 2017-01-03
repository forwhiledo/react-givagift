

var React = require('react');
var ReactDOM = require('react-dom');
import {connect} from 'react-redux';
import {intializeResults} from '../actions/index.js'
import cssStyle from '../css-variables.js'

import Container from './outtercontainer.js'

export class ResultsApp extends React.Component {

            constructor(props){

              super(props);


              this.props.dispatch( intializeResults());

            }

           render(){



            var OutterContainerArray=[];

             for(var i=0; i<this.props.contents.length; i++){

            OutterContainerArray.push( <Container  id= {i} content={this.props.contents[i]} contentRange={this.props.contents[i].range} />)

             }
             return (
               <div style={{backgroundColor:cssStyle.dark_white, paddingTop:'40px'}}>

                   {OutterContainerArray}

                </div>

             );
           }
}




var mapStateToProps= function(state){

console.log(state);

return {
  contents:state.contents
}

}

var ResultsAppContainer= connect(mapStateToProps)(ResultsApp)

export default ResultsAppContainer;
