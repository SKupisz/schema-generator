import { CHOOSE_SCHEMA } from "./choosingSchemaTypes.js";

export const chooseSchema = (newSchema) => {
    return {
        type: CHOOSE_SCHEMA,
        schema: newSchema
    }
};