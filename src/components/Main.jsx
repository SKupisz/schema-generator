import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { MainContainer } from "../styled/main.jsx";
import { chooseSchema } from "../redux/choosingSchema/choosingSchemaAction.js";
import Landing from "./subcomponents/landing.jsx";
import TypeChoosing from "./subcomponents/typeChoosing.jsx";
import MainPanel from "./subcomponents/mainPanel.jsx";

import Background from "../images/main-background2.jpg";

const Main = () => {

    const [initialPhase, setInitialPhase] = useState(0); // 0 - landing page, 1 - choosing schema type, 2 - fire in the hall
    const schemaType = useSelector(state => state.chose.currentSchema);
    const dispatch = useDispatch();

    return <MainContainer className="block-center" background={Background}>
        {
            initialPhase === 0 ? <Landing callback={(newState) => setInitialPhase(newState)}/> : 
            initialPhase === 1 ? <TypeChoosing callback={(newChoice) => {dispatch(chooseSchema(newChoice));setInitialPhase(2); }}/> : <></>
        }
        {
            schemaType === "None" ? <></> : initialPhase === 2 ? <MainPanel/> : <></>
        }
    </MainContainer>
};

export default Main;