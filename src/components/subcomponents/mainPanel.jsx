import React, {useEffect, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { VStack,  HStack, FormControl, Heading, Button, Input, useMediaQuery } from "@chakra-ui/react";

import { AddToSchema, ModifySchemaElem } from "../../redux/renderingSchema/renderingSchemaAction.js";

const MainPanel = () => {

    const nameInputRef = useRef();
    const valueInputRef = useRef();

    const currentSchemaName = useSelector(state => state.chose.currentSchema);
    const currentSchema = useSelector(state => state.render);

    const dispatch = useDispatch();

    const isAtMostPC = useMediaQuery("(min-width: 1440px)");
    const isASmallerDevice = useMediaQuery("(min-width: 1024px)");
    const isBreakpointForAdding = useMediaQuery("(min-width: 680px)");

    useEffect(() => {
        dispatch(ModifySchemaElem({
            "@context": "https://schema.org",
            "@type": currentSchemaName,
        }));
    }, []);

    const handleTheAdding = () => {
        const name = nameInputRef.current.value;
        const value = valueInputRef.current.value;
        if(name.length > 0 && value.length > 0){
            let toPush = {};
            toPush[name] = value;
            dispatch(AddToSchema(toPush));
            nameInputRef.current.value = "";
            valueInputRef.current.value = "";
        }
    };

    return <FormControl w={isASmallerDevice[0] ? isAtMostPC[0] ? "60%" : "80%" : "95%"} className="block-center panel" spacing={4} align="center">
        <Heading align="center" as="h1" size="4xl" color="rgba(240,240,240,.7)" w="100%" className="block-center choosing-header">
            {currentSchemaName} Schema
        </Heading>
        
        {isBreakpointForAdding[0] ? <HStack spacing={10} align="center" justify="center">
            <Input placeholder="Name..." ref = {nameInputRef} p={14}
            size="2xl" className="property-input"/>
            <Input placeholder="Value..." ref = {valueInputRef} p={14}
            size="2xl" className="property-input"/>
            <Button align="center" className="schema-button block-center" p={14} pr={20} pl={20}
                onClick = {() => handleTheAdding()}>
                Add
            </Button>
        </HStack>: 
        <VStack spacing={10} align="center" justify="center">
            <Input placeholder="Name..." ref = {nameInputRef} p={14}
            size="2xl" className="property-input"/>
            <Input placeholder="Value..." ref = {valueInputRef} p={14}
            size="2xl" className="property-input"/>
            <Button align="center" className="schema-button block-center" p={14} pr={20} pl={20}
                onClick = {() => handleTheAdding()}>
                Add
            </Button>
        </VStack>}
    </FormControl>
};

export default MainPanel;