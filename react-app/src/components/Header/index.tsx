import React from "react";
import styled from "@emotion/styled";
import OnlineSwitch from "./online-switch/index";
import {
    NavLink,
} from "react-router-dom";
import { updateOnlineStatus } from "../../store/online-status/actions";
import { useDispatch } from "react-redux";

const StyledHeader = styled.header`
    background-color: grey;
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
    const dispatch = useDispatch();

    function onChange(event: React.ChangeEvent<HTMLInputElement>, checked: boolean){
        dispatch(updateOnlineStatus(checked));
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
