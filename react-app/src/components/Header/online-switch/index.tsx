import React from "react"
import Switch from "@material-ui/core/Switch";
import styled from "@emotion/styled"

const Wrapper = styled.div`    
    display: flex;
    color: white;
    font-size: small;
`;

const Label = styled.b`
    margin: auto;
`;

type OnlineSwitchProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

function OnlineSwitch({onChange}: OnlineSwitchProps){
    return (
        <Wrapper>
            <Label>ONLINE: </Label>
            <Switch
                onChange={onChange}
                defaultChecked={false}
                color="primary"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
            />   
        </Wrapper>
    )
}

export default OnlineSwitch;
