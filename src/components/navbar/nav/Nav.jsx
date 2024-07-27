
import { LinksLeft, LinksRight } from "@/components/navbar/links/Links"
import { StyledNav } from "@/components/styles/Nav.styled"

const Nav = () => {
    return(
    <StyledNav>
        <LinksLeft />
        <LinksRight />
    </StyledNav>
    )
}

export default Nav