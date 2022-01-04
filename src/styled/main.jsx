import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    background: ${(props) => 
        props.background ? `url(${props.background})` : "#111"};
    background-size: cover;
    padding: 0;
`;

export const StartButton = styled.div`
    padding: 9px 19px;
    font-size: 1em;
    font-family: "Oswald", sans-serif;
    color: rgba(230,230,230,.6);
    letter-spacing: 0.06em;
    border: 1px solid rgba(230,230,230,.6);
    border-radius: 10px;
    width: fit-content;
    text-transform: uppercase;
    position: relative;
    top: 28vh;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(120%);
    }

    @media screen and (min-width: 320px){
        font-size: 1.4em;
        top: 38vh;
    }
`;