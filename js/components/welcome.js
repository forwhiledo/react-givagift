
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
import cssStyle from '../css-variables.js';
var Link = router.Link;


var Welcome= function(){

            var fadeStyle='fadeinslow ';

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
    <div  className={ 'welcome_message ' + fadeStyle } >

      <h1 style={h1Style}>Welcome to <span>GIVA<span>GIFT</span></span><i className="fa fa-gift"></i></h1>

        <h2 style={h2Style}> Helping you find that gift for that birthday that is coming very soon!</h2>

        <div style={buttonDiv}>
             <Link to={'/signup-login'}>
          <button style={buttonStyle} > ENTER </button>
              </Link>
        </div>

  </div>
  );
};


export default Welcome;
