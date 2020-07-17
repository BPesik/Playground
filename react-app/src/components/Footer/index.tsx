import React from "react"
import styled from "../../../node_modules/@emotion/styled"
import Link from "../Link"

const StyledFooter = styled.footer`
    background-color: #282c34;
    bottom: 0;
    height: 40px;
    left: 0;
    position: fixed;
    text-align: center;
    width: 100%;
`;

function Footer() {
    return (
        <StyledFooter>
            <Link href="https://reactjs.org"
                        value="Learn React" />
        </StyledFooter>
    )
}

export default Footer;