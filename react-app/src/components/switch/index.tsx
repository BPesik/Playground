import React from "react";
import styled from "@emotion/styled/macro";

const StyledSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
`;


const Slider = styled.span`
    border-radius: 34px;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: grey;
    -webkit-transition: .4s;
    transition: .4s;

    :before {
        border-radius: 50%;
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }
`;

const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    
    :checked {
        background-color: #2196F3; 
    }

    :checked + ${Slider} {
        background-color: #2196F3;
    }

    :focus + ${Slider} {
        box-shadow: 0 0 1px #2196F3;
    }

    :checked + ${Slider}:before {
        -webkit-transform: translateX(16px);
        -ms-transform: translateX(16px);
        transform: translateX(16px); 
    }
`;

type SwitchProps = {
    onClick: () => void;
};

function Switch({ onClick }: SwitchProps){
    return(
        <StyledSwitch>
            <Input type="checkbox" onClick={onClick}/>
            <Slider />
        </StyledSwitch>
    );
};

export default Switch;
