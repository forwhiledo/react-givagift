

var React = require('react');
var ReactDOM = require('react-dom');
import ItemContainerContainer from './itemcontainer.js'
import {connect} from 'react-redux';
import { Button } from 'react-bootstrap';
import { ButtonToolbar} from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import cssStyle from '../css-variables.js'


var buttonGroupInstance= function(){

  return (
    <ButtonToolbar>
     <ButtonGroup>
       <Button>1</Button>
       <Button>2</Button>
       <Button>3</Button>
       <Button>4</Button>
       </ButtonGroup>
       </ButtonToolbar>

  );
};

export class InnerContainerDiv extends React.Component {

   render(){
     return (

       <div style={{backgroundColor:cssStyle.light_black}} className='innercontainer'>

          <p style={{color:cssStyle.white}}> from {this.props.contents[this.props.id].range.from +1} to {this.props.contents[this.props.id].range.to}  </p>

        <ItemContainerContainer id={this.props.id}/>

       <buttonGroupInstance/>

     </div>

        );
   }
};




var mapStateToProps= function(state){



return {
  contents:state.contents
}

}


var InnerContainer= connect(mapStateToProps)(InnerContainerDiv);

export default InnerContainer;
