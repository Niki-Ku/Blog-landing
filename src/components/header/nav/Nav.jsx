
import { LinksLeft, LinksRight } from "@/components/header/links/Links"
import { StyledNav } from "@/components/header/nav/Nav.styled"

const Nav = () => {
    return(
    <StyledNav>
        <LinksLeft />
        <LinksRight />
    </StyledNav>
    )
}

export default Nav