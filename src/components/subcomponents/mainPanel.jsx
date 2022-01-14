import React, {useEffect, useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { VStack, Box, HStack, FormControl, Heading, Button, Input, useMediaQuery } from "@chakra-ui/react";

import { AddToSchema, ModifySchemaElem } from "../../redux/renderingSchema/renderingSchemaAction.js";

const MainPanel = () => {

    const nameInputRef = useRef();
    const valueInputRef = useRef();

    const [currentRender, setCurrentRender] = useState(null);
    const [isSchemaCopied, toggleIsSchemaCopied] = useState(false);

    const currentSchemaName = useSelector(state => state.chose.currentSchema);
    const currentSchema = useSelector(state => state.render);

    const dispatch = useDispatch();

    const isAtMostPC = useMediaQuery("(min-width: 1440px)");
    const isASmallerDevice = useMediaQuery("(min-width: 1024px)");
    const isBreakpointForAdding = useMediaQuery("(min-width: 680px)");

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

    const copySchemaToClipboard = () => {
        const textToCopy = JSON.stringify(currentSchema);
        navigator.clipboard.writeText(textToCopy);
        toggleIsSchemaCopied(true);
    }
    
    useEffect(() => {
        dispatch(ModifySchemaElem({
            "@context": "https://schema.org",
            "@type": currentSchemaName,
        }));
    }, []);

    useEffect(() => {
        let newCurrentRender=[];
        const schemaKeys = Object.keys(currentSchema);
        for(let i = 2; i < schemaKeys.length; i++){ // we don't render the first two elements
            newCurrentRender.push(<HStack p={10} justify="left">
                <Box p={10} pr={20} pl={20} ml={5} className="property-box property-name">
                    {schemaKeys[i]}
                </Box>
                <Box p={10} pr={20} pl={20} mr={5} className="property-box property-value">
                    {currentSchema[schemaKeys[i]]}
                </Box>
            </HStack>)
        }
        toggleIsSchemaCopied(false);
        setCurrentRender(newCurrentRender);
    }, [currentSchema]);

    return <FormControl w={isASmallerDevice[0] ? isAtMostPC[0] ? "60%" : "80%" : "95%"} className="block-center panel" spacing={4} align="center">
        <Heading align="center" as="h1" size="4xl" color="rgba(240,240,240,.7)" w="100%" className="block-center choosing-header">
            {currentSchemaName} Schema
        </Heading>
        <VStack spacing={4} align="center" justify="center" mb={10}>
            <Button align="center" className="schema-button block-center" p={14} pr={30} pl={30}
                onClick={() => copySchemaToClipboard()}>
                Copy schema to clipboard
            </Button>
            {
                isSchemaCopied ? <Box className="copy-info block-center">
                    Schema copied!
                </Box>: <></>
            }
        </VStack>
        
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
        <VStack spacing={0} align="left" justify="left" className="block-center" w="60%" mt={10}>
            {currentRender}
        </VStack>
    </FormControl>
};

export default MainPanel;