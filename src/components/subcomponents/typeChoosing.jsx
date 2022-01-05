import React from "react";
import { FormControl, Heading, HStack, Button } from '@chakra-ui/react';
import { useMediaQuery } from "@chakra-ui/react";

const TypeChoosing = ({callback}) => {

    const [isMobile] = useMediaQuery("(min-width: 768px)");
    const [isPhone] = useMediaQuery("(min-width: 425px)");

    return <>
        <FormControl p={4} w={isPhone ? isMobile ? "60%" : "80%" : "95%"} className="block-center choosing-panel" align="center">
            <Heading className="block-center choosing-header" align="center" w="100%" 
            as={isPhone ? isMobile ? "h1" : "h2" : "h3"} size="4xl" color="rgba(240,240,240,.7)">
                Choose the schema type
            </Heading>
            <HStack spacing={10} align="center" justify="center">
                <Button bg="rgba(230,230,230,.2)" w={isPhone ? isMobile ? "20%" : "40%" : "55%"} p={10} className="schema-button"
                onClick = {() => callback("Person")}>
                    Person
                </Button>
            </HStack>
        </FormControl>
    </>
};

export default TypeChoosing;