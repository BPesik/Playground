import React from "react";
import styled from "@emotion/styled"

type AddButtonProps = {
    onClick: () => void;
    color: string;
    size: string; 
}

function GetSize(size: string){
    switch(size){
        case "S": return "32px"
        case "M": return "40px"
        case "L": return "48px"
    }
}

function AddButton({ onClick, color, size }: AddButtonProps){
    const pixelSize = GetSize(size);

    const StyledButton = styled.button`
        background: ${color};
        border: ${color} 2px solid;
        border-radius: 24px;
        color: white;
        font-size: x-large;
        height: ${pixelSize};
        outline: none;
        width: ${pixelSize};

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
