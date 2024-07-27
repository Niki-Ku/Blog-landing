"use client"

import Logo from "./logo/Logo"
import Nav from "./nav/Nav"
import { StyledHeader } from "../styles/Header.styled"

const Header = () => {
    return(
        <StyledHeader>
            <Logo />
            <Nav />
        </StyledHeader>
    )
}

export default Header