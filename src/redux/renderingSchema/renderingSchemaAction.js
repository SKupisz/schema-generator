import {EDIT_SCHEMA} from "./renderingSchemaTypes.js";

export const AddToSchema = (newSchemaElem) => {
    return {
        type: EDIT_SCHEMA,
        mode: 1,
        data: newSchemaElem
    }
}

export const DeleteFromSchema = (schemaName) => {
    return {
        type: EDIT_SCHEMA,
        mode: -1,
        name: schemaName
    }
}

export const ModifySchemaElem = (modifiedSchemaElem) => {
    return {
        type: EDIT_SCHEMA,
        mode: 0,
        data: modifiedSchemaElem
    }
}