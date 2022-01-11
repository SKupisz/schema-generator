import {combineReducers} from "redux";
import choseReducer from "./choosingSchema/choosingSchemaReducer.js";
import RenderingReducer from "./renderingSchema/renderingSchemaReducer.js";

const RootReducer = combineReducers({
    chose: choseReducer,
    render: RenderingReducer
});

export default RootReducer;