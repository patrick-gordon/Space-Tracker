import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor: '#B6452C'}}>
        <NavbarBrand href="/" className="mr-auto" className='text-white' >
          Space Tracker
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={isOpen} navbar >
          <Nav navbar>
            <NavItem>
              <NavLink href="/nasa" className='text-white'>Nasa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/spacex" className='text-white'>
                SpaceX
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
