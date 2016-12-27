

var React = require('react');
var ReactDOM = require('react-dom');
import InnerContainer from './innercontainer.js';
import {ArrowLeft, ArrowRight, initializeResults} from '../actions/index.js'
import {connect} from 'react-redux';

 export class OutterContainer extends React.Component{


      constructor(props){
       super(props);

       this.leftClick= this.leftClick.bind(this);
       this.rightClick= this.rightClick.bind(this);

      }

      leftClick(){

        this.props.dispatch(ArrowLeft(this.props.id));

      }

      rightClick(){

          console.log(this.props.id);
          this.props.dispatch(ArrowRight(this.props.id));

      }

      render(){
  console.log(this);

        return (

          <div className='outtercontainer'>

          <i className="fa fa-chevron-left arrow-left" aria-hidden="true" onClick = {this.leftClick} ></i>

          <InnerContainer id={this.props.id}/>

            <i className="fa fa-chevron-right arrow-right" aria-hidden="true" onClick = {this.rightClick} ></i>

          </div>
        );
      }
 }

var Container= connect()(OutterContainer);

export default Container;
