
var React = require('react');
var ReactDOM = require('react-dom');
import {connect} from 'react-redux';

var ItemPic= function(props){

    console.log(props);

  return(
<div className='item-pic'>
  <a href={props.content.buyLink}> <img src={props.content.picLink}/></a>
</div>

  );
};

var ItemName= function(props){

   var newTitleOfItem= props.content.titleOfItem.substr(0, 21) + '....'


    return (
      <div className='item-info'>

        <a href={props.content.buyLink}>{newTitleOfItem}</a>

      </div>
    );
};


var ItemPrice= function(props){

    return (
      <div className='item-price'>

        <a>{props.content.LowestNewItemPrice}</a>

      </div>
    );
};



var Item= function(props){


    var item_content= props.contents[props.id][props.itemid]

    return(

      <div className='itemdiv'>

            <a href={ item_content.buyLink}>
              <ItemPic content={ item_content }/>
              </a>

          <ItemName content={ item_content }/>

          <ItemPrice content={ item_content }/>

      </div>
    );
};

var mapStateToProps= function(state){

  return {
  contents:state.contents
  }

}

var Itemdiv= connect(mapStateToProps)(Item);


export default Itemdiv;
