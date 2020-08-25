import React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
    background-color: grey;
    bottom: 0;
    height: 40px;
    left: 0;
    position: fixed;
    text-align: center;
    width: 100%;
`;

const Link = styled.a`
    color: white;
    font-family: Arial;
    position: absolute;
    top: 25%;
`;

function Footer() {
    return (
        <StyledFooter>  
            <Link href=""
                target="_blank"
                rel="noopener noreferrer">
                    Learn React
            </Link>
        </StyledFooter>
    )
}

export default Footer;
