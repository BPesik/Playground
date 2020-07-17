import React from "react";
import styled from "../../node_modules/@emotion/styled"

type linkProps = {
    href: string;
    value: string;    
}

const StyledLink = styled.a`
    color: #61dafb;
`;

function Link({ href, value }: linkProps) {    
    return (
        <StyledLink
            href={href}
            target="_blank"
            rel="noopener noreferrer">
                {value}
        </StyledLink>
    )
}
  
export default Link;