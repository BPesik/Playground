import React from "react";
import styled from "../../../../node_modules/@emotion/styled"

type TitleProps = {
    value: string;
}

const StyledTitle = styled.a`
    color: white;
    text-align: center;
    font-weight: bold;
`;

function Title({ value }: TitleProps) {
    return (
        <StyledTitle >
            {value}
        </StyledTitle>
    )
}

export default Title;