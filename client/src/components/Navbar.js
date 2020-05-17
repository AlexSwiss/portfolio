import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const AppNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink tag={Link} to="/" activeClassName="active">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/resume" activeClassName="active">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/projects" activeClassName="active">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/articles" activeClassName="active">Articles</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNav;