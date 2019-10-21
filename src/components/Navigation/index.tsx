import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './index.css';
import { routePaths } from '../../utils/routePaths';
import logo from '../../resources/logo.jpg';

export const Navigation: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);

  const onToggle = () => {
    if (window.innerWidth <= 767) {
      setExpanded(!expanded);
    }
  };

  const {
    ABOUT,
    ASSORTMENT,
    CONTACT,
    HOME,
    ORDERING,
    SOCIAL_MEDIA,
  } = routePaths;

  return (
    <div className="navigation">
      <Container>
        <Navbar
          collapseOnSelect
          expanded={expanded}
          onToggle={onToggle}
          expand="md"
        >
          <Navbar.Brand>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink
                exact
                className="normal"
                activeClassName="active"
                onClick={onToggle}
                to={HOME}
              >
                Etusivu
              </NavLink>
              <NavLink
                className="normal"
                activeClassName="active"
                onClick={onToggle}
                to={ABOUT}
              >
                Leipomo
              </NavLink>
              <NavLink
                className="normal"
                activeClassName="active"
                onClick={onToggle}
                to={ASSORTMENT}
              >
                Menu
              </NavLink>
            </Nav>
            <Nav className="right-align">
              <NavLink
                className="normal"
                activeClassName="active"
                onClick={onToggle}
                to={ORDERING}
              >
                Tilaus- ja toimitusehdot
              </NavLink>
              <NavLink
                className="normal"
                activeClassName="active"
                onClick={onToggle}
                to={CONTACT}
              >
                Ota yhteyttä
              </NavLink>
              <NavLink
                className="normal"
                activeClassName="active"
                onClick={onToggle}
                to={SOCIAL_MEDIA}
              >
                Blogi
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};
