import React, { useState } from "react"
import styled from "../../../node_modules/@emotion/styled"
import Title from "./Title/index"
import {
    NavLink,
} from "react-router-dom";


const StyledHeader = styled.header`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    height: 80px;
`;

const LinkWrapper = styled.div`
    display: flex;
`;

const StyledNavLink = styled(NavLink)`
    color: white;
    padding: 16px;
    text-decoration: none;
`;

function Header() {
    return (
        <StyledHeader>
            <Title value="Playground" />         
            <LinkWrapper>
                
                <StyledNavLink to="/About">
                        About
                    </StyledNavLink>
                    <StyledNavLink to="/Data">
                        Data
                    </StyledNavLink>
            </LinkWrapper>
        </StyledHeader>
    )
}
  
export default Header;