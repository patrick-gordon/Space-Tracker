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
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar className="main-navbar">
        <FontAwesomeIcon
          icon={faRocket}
          size="2x"
          className="mr-3"
        ></FontAwesomeIcon>
        <NavbarBrand className="main-navbar-brand" href="/">
          Space Tracker
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          className="mr-2"
          style={{ border: "1px solid white" }}
        >
          {" "}
          <FontAwesomeIcon icon={faAlignJustify} color={"#FFF"} size="1x" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="main-navbar-sublink-nasa" href="/nasa">
                Nasa
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="main-navbar-sublink-spacex" href="/spacex">
                SpaceX
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}
