import {combineReducers} from "redux";
import choseReducer from "./choosingSchema/choosingSchemaReducer.js";

const RootReducer = combineReducers({
    chose: choseReducer
});

export default RootReducer;