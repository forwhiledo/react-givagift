

var React = require('react');
var ReactDOM = require('react-dom');
import ItemContainerContainer from './itemcontainer.js'
import {connect} from 'react-redux';


export class InnerContainerDiv extends React.Component {


  render(){



    return (

      <div  className='innercontainer'>

         <p> from {this.props.contents[this.props.id].range.from} to {this.props.contents[this.props.id].range.to}  </p>

       <ItemContainerContainer id={this.props.id}/>

    </div>

  );
};

}


var mapStateToProps= function(state){



return {
  contents:state.contents
}

}


var InnerContainer= connect(mapStateToProps)(InnerContainerDiv);

export default InnerContainer;
