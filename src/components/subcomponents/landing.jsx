import React from "react";
import { Heading } from "@chakra-ui/react";

import { StartButton } from "../../styled/main.jsx";

const Landing = ({callback}) => {
    return <>
        <Heading mb={4} as="h1" size='4xl' isTruncated color="rgba(255,255,255,.8)" className="main-header block-center">
            Schema Generator
        </Heading>
        <StartButton className="block-center" onClick = {() => callback(1)}>
            Start
        </StartButton>
    </>
};

export default Landing;