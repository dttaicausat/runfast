import { createStore } from 'redux'
import CartReducer from "./reducer"
import { combineReducers } from "redux";
const newReducer = combineReducers({
    ListItem: CartReducer


}); 
const store = createStore(newReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
