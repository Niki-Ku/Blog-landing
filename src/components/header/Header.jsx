"use client"

import Logo from "./logo/Logo"
import Nav from "./nav/Nav"
import { StyledHeader } from "@/components/header/Header.styled"

const Header = () => {
    return(
        <div className="container">
            <StyledHeader>
                <Logo />
                <Nav />
            </StyledHeader>
        </div>
    )
}

export default Header