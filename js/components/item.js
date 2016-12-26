
var React = require('react');
var ReactDOM = require('react-dom');


var ItemPic= function(props){

  console.log(props.content);
  return(

<div className='item-pic'>

   <img src={props.content.picLink}/>

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
    console.log(props.content);

    return(

      <div className='itemdiv'>

          <ItemPic content={props.content}/>

          <ItemName content={props.content}/>

          <ItemPrice content={props.content}/>

      </div>
    );

};







export default Item;
