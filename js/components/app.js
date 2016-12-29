var React = require('react');
 import cssStyle from '../css-variables.js';
var orange='#ff7733';
var App = function(props) {

   var headingStyle={
   maxWidth: "100%",
   height: "90px",
   backgroundColor:orange
   };

   var h1Style={
   fontFamily:cssStyle.baloo,
   fontSize: "25px",
   marginLeft:"10px"
   };

   var h1White={
     fontFamily:cssStyle.baloo,
     fontSize: "25px",
     color:'white'
   };

   var menuDiv={
       backgroundColor:'#333333',
       height:'70px',
        paddingTop:'10px',
        maxWidth: "100%",
   };

    return (
        <div style={headingStyle}>
          <h1 style={h1Style}>GIVA<span style={h1White}>GIFT</span> <i className="fa fa-gift" aria-hidden="true"></i></h1>
           <div style={menuDiv}></div>
            <div>
              {props.children}
            </div>
        </div>
    );
};

module.exports = App;
