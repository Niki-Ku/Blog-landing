"use client"

import Logo from "./logo/Logo"
import Nav from "./nav/Nav"
import { StyledHeader } from "@/components/header/Header.styled"

const Header = () => {
    return(
        <StyledHeader>
            <Logo />
            <Nav />
        </StyledHeader>
    )
}

export default Header