import React from 'react'
import {NavbarContainer, NavbarWrap, Logo, Nav, NavLink, Search, SearchWrap, Input, ButtonContainer, Button} from './NavbarComponents'

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarWrap>
             <Logo />
              <Nav>
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/">Market</NavLink>
                <NavLink to = "/">Trade</NavLink>
                <NavLink to = "/">Pricing</NavLink>
                <NavLink to = "/">Download</NavLink>
                <NavLink to = "/">Help</NavLink>
              </Nav>
              <Search>
                  <SearchWrap>
                      <Input type="text" placeholder="Symbol/Name" />
                  </SearchWrap>
              </Search>
              <ButtonContainer>
                  <Button>Sign Up</Button>
                  <Button>Log In</Button>
              </ButtonContainer>
            </NavbarWrap>
        </NavbarContainer>
    )
}

export default Navbar
