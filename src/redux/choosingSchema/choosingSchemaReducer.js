import { CHOOSE_SCHEMA } from "./choosingSchemaTypes.js";

const initialState = {
    currentSchema: "None"
};

const choseReducer = (state=initialState,action) => {
    switch(action.type){
        case CHOOSE_SCHEMA:
            return {
                ...state,
                currentSchema: action.schema
            }
        default:
            return state;
    }
};

export default choseReducer;