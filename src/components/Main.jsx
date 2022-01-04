import React from "react";
import { Heading } from "@chakra-ui/react";

import { MainContainer, StartButton } from "../styled/main.jsx";

import Background from "../images/main-background2.jpg";

const Main = () => {
    return <MainContainer className="block-center" background={Background}>
        <Heading mb={4} as="h1" size='4xl' isTruncated color="rgba(255,255,255,.8)" className="main-header block-center">
            Schema Generator
        </Heading>
        <StartButton className="block-center">
            Start
        </StartButton>
    </MainContainer>
};

export default Main;