var redux= require('redux');

import reducer from './reducers/index';
var thunk = require('redux-thunk').default;
var applyMiddleWare= redux.applyMiddleware;


var store= redux.createStore(reducer, applyMiddleWare(thunk));


export default store;
