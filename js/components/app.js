var React = require('react');
 import cssStyle from '../css-variables.js';
var orange='#ff7733';
import {connect} from 'react-redux';
import UserSideBarContainer from './usersidebar';


export class App extends React.Component{



  render () {

  var sideBar;

    if(this.props.user){

     sideBar= (
       <div style={{float:'left'}}>
     <UserSideBarContainer/>
       </div>
     );

    }

       var headingStyle={
       maxWidth: "100%",
       height: "90px",
       backgroundColor:orange,
       paddingTop:'10px'
       };

       var h1Style={
       fontFamily:cssStyle.baloo,
       fontSize: "25px",
       marginLeft:"10px",
       height:'40px',
       marginTop:'0px'
       };

       var h1White={
         fontFamily:cssStyle.baloo,
         fontSize: "25px",
         color:'white'
       };

       var menuDiv={
           backgroundColor:'#333333',
           height:'60px',
            paddingTop:'10px',
            maxWidth: "100%"}


    return(

      <div style={headingStyle}>

        <h1 style={h1Style}>GIVA<span style={h1White}>GIFT</span> <i className="fa fa-gift" aria-hidden="true"></i></h1>
         <div style={menuDiv}></div>

          <div>
            {this.props.children}
          </div>

      </div>

    );
  }
}


var mapStateToProps= function(state){
   return {
     user:state.user
   }
}

var AppContainer= connect(mapStateToProps)(App)

module.exports = AppContainer;
