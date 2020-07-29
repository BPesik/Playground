import React from "react";
import styled from "../../../node_modules/@emotion/styled"

const Body = styled.div`
    padding: 24px;
`;

function About() {
    return (
        <>  
            <Body>
                <p>Welcome to the React playground</p>
            </Body>
        </>
    )
}

export default About;