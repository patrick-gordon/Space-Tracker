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
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
        <Container>
          <Navbar style={{ backgroundColor: "#00000", maxHeight: "10rem" }}>
          <FontAwesomeIcon icon={faRocket} size="2x" className='mr-3'></FontAwesomeIcon>
          <NavbarBrand
            href="/"
            className="mr-auto"
            style={{ color: "#FFFF", fontSize: "36px" }}
          >
            Space Tracker
          </NavbarBrand>
          <NavbarToggler
            onClick={toggleNavbar}
            className="mr-2"
            style={{ border: "1px solid black" }}
          >
            {" "}
            <FontAwesomeIcon icon={faAlignJustify} color={"#FFF"} size="1x" />
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="/nasa"
                  style={{ color: "#FFF", fontSize: "22px" }}
                  className='ml-5'
                >
                  Nasa
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/spacex"
                  style={{ color: "#FFF", fontSize: "22px" }}
                  className='ml-5'
                >
                  SpaceX
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
        </Container>
    
  );
}
