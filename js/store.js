var redux= require('redux');

import reducer from './reducers/index';
var thunk = require('redux-thunk').default;
var applyMiddleWare= redux.applyMiddleware;


var store= redux.createStore(reducer,redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f=> f
), applyMiddleWare(thunk), );

store.subscribe(()=>{
  var state= store.getState();

  console.log('now the content is', state );
});

export default store;
