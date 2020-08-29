import React from "react"
import Switch from "../../switch/index";
import styled from "@emotion/styled"

const Wrapper = styled.div`    
    display: flex;
    color: white;
    font-size: small;
    padding: 8px;
`;

const Label = styled.b`
    margin: auto;
    margin-right: 8px;
`;

type OnlineSwitchProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

function OnlineSwitch({onChange}: OnlineSwitchProps){
    return (
        <Wrapper>
            <Label>ONLINE: </Label>
            <Switch onClick={() => onChange} />   
        </Wrapper>
    )
}

export default OnlineSwitch;
