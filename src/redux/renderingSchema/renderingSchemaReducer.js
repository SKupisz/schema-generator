import { EDIT_SCHEMA, RENDER_SCHEMA } from "./renderingSchemaTypes.js";

const initialState = {
    "@context": "https://schema.org",
    "@type": "",
};

const RenderingReducer = (state=initialState, action) => {
    switch(action.type){
        case EDIT_SCHEMA:
            switch(action.mode){
                case 1:
                    return {
                        ...state,
                        ...action.data
                    }
                case 0:
                    return {
                        ...state,
                        ...action.data
                    }
                case -1:
                    let newState = {...state};
                    delete newState[action.name];
                    return newState;
                default:
                    return state;
            }
        default:
            return state;
    }
};

export default RenderingReducer;