import React from "react"
import styled from "../../../node_modules/@emotion/styled"
import OnlineSwitch from "./OnlineSwitch/index"
import {
    NavLink,
} from "react-router-dom";


const StyledHeader = styled.header`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
`;

const LinkWrapper = styled.div`
    display: flex;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.a`
    color: white;
    text-align: center;
    font-weight: bold;
    margin-left: 16px;
`;

const StyledNavLink = styled(NavLink)`
    color: white;
    padding: 16px;
    text-decoration: none;
`;

function Header() {
    function onChange(event: React.ChangeEvent<HTMLInputElement>, checked: boolean){
        // Implement Redux store and save offline/online state
    }
    
    return (
        <StyledHeader>
            <TitleWrapper>
                <Title>PLAYGROUND</Title>   
                <OnlineSwitch onChange={onChange}/>   
            </TitleWrapper>
            <LinkWrapper>        
                <StyledNavLink to="/About">
                        About
                    </StyledNavLink>
                    <StyledNavLink to="/Todos">
                        Todos
                    </StyledNavLink>
            </LinkWrapper>
        </StyledHeader>
    )
}
  
export default Header;