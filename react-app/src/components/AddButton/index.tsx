import React from "react";
import styled from "../../../node_modules/@emotion/styled"

type AddButtonProps = {
    onClick: () => void;
    color: string;
}

function AddButton({ onClick, color }: AddButtonProps){
    const StyledButton = styled.button`
        background: ${color};
        border: ${color} 2px solid;
        border-radius: 24px;
        color: white;
        font-size: x-large;
        height: 40px;
        outline: none;
        width: 40px;

        :hover {
            background: white;
            color: ${color};
        }

        :active {
            transform: translateY(2px);
        }
    `;

    return(
        <StyledButton onClick={onClick}>
            +
        </StyledButton>
    )
}

export default AddButton;