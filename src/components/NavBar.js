import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor: '#8CA1D2', maxHeight: '10rem'}}>
        <Container>
        <NavbarBrand href="/" className="mr-auto" style={{color: '#FFFF', fontSize: '36px'}} >
          Space Tracker
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" style={{border: '1px solid black'}}> <FontAwesomeIcon icon={faAlignJustify} color={'#FFF'} size='1x'/></NavbarToggler>
        <Collapse isOpen={isOpen} navbar >
          <Nav navbar>
            <NavItem>
              <NavLink href="/nasa"  style={{color: '#FFF', fontSize: '22px'}}>Nasa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/spacex"  style={{color: '#FFF', fontSize: '22px'}}>
                SpaceX
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
