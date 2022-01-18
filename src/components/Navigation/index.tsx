import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './index.css';
import { AppRoute } from '../../utils/route';
import logo from '../../resources/logo.jpg';

export const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    const element = containerRef ? containerRef.current : undefined;

    if (!element) {
      return;
    }

    if (window.pageYOffset > element.offsetTop) {
      element.classList.add('sticky');
    } else {
      element.classList.remove('sticky');
    }
  };

  const onToggle = () => {
    if (window.innerWidth <= 999) {
      setExpanded(!expanded);
    }
  };

  return (
    <div className="navigation" ref={containerRef as any}>
      <Container>
        <Navbar
          collapseOnSelect
          expanded={expanded}
          onToggle={onToggle}
          expand="lg"
        >
          <Navbar.Brand>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink
                className={({ isActive }) =>
                  `normal ${isActive ? 'active' : ''}`
                }
                onClick={onToggle}
                to={AppRoute.Home}
              >
                {t('home', { ns: 'navigation' })}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `normal ${isActive ? 'active' : ''}`
                }
                onClick={onToggle}
                to={AppRoute.Assortment}
              >
                {t('assortment', { ns: 'navigation' })}
              </NavLink>
            </Nav>
            <Nav className="right-align">
              <NavLink
                className={({ isActive }) =>
                  `normal ${isActive ? 'active' : ''}`
                }
                onClick={onToggle}
                to={AppRoute.Ordering}
              >
                {t('ordering', { ns: 'navigation' })}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `normal ${isActive ? 'active' : ''}`
                }
                onClick={onToggle}
                to={AppRoute.Contact}
              >
                {t('contact', { ns: 'navigation' })}
              </NavLink>
              <a href="http://annaj-sukkiajasuklaata.blogspot.com/">
                {t('blog', { ns: 'navigation' })}
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};
