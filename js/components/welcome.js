
var React = require('react');
var ReactDOM = require('react-dom');

import cssStyle from '../css-variables.js';


var Welcome= function(){

        var welcome_message= {
          marginTop:'120px',
           width: "700px",
           marginLeft:'auto',
           marginRight:'auto'
        };

          var  h1Style= {
             fontSize:'50px',
             fontFamily: cssStyle.baloo,
              textAlign: "center"
          };


          var  h2Style= {
             fontSize:'30px',
             fontFamily: cssStyle.font3,
              textAlign: "center"
          };

          var buttonDiv={
             height:'400px',
             width:'700px'
          };

          var buttonStyle= {
            width: "200px",
            height:"40px",
            display:'block',
            backgroundColor: cssStyle.pink,
            border: "0px",
            borderRadius:"5px",
            fontFamily:cssStyle.baloo,
            fontSize: "20px",
            color:cssStyle.white,
            marginLeft:'auto',
            marginRight:'auto'
          };
console.log(cssStyle.centralize);

  return(
    <div  style={welcome_message}>

      <h1 style={h1Style}>Welcome to <span>GIVA<span>GIFT</span></span><i className="fa fa-gift"></i></h1>

        <h2 style={h2Style}> Helping you find that gift for that birthday that is coming very soon!</h2>

        <div style={buttonDiv}>
           <a ></a>
           
          <button style={buttonStyle}> ENTER </button>

        </div>

  </div>
  );
};


export default Welcome;