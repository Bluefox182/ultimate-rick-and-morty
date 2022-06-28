import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/img/Rick100.svg';
import styled from 'styled-components';

function NavBar({ navToggle }) {
  return (
    <StyledNavBar className={`${navToggle ? 'nav-toggle' : ''}`}>
      <div className='Nav-Container'>
        <div className='logo'>
          <img src={logo} alt='Rick Logo' />
        </div>
        <div className='nav-links'>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active-class' : '')}
          >
            Home
          </NavLink>
          <NavLink
            to='/characters'
            className={({ isActive }) => (isActive ? 'active-class' : '')}
          >
            Characters
          </NavLink>
          <NavLink
            to='/episodes'
            className={({ isActive }) => (isActive ? 'active-class' : '')}
          >
            Episodes
          </NavLink>
          <NavLink
            to='/locations'
            className={({ isActive }) => (isActive ? 'active-class' : '')}
          >
            Locations
          </NavLink>
        </div>
      </div>
    </StyledNavBar>
  );
}

export default NavBar;

// Styled Components
const StyledNavBar = styled.nav`
  background-color: transparent;
  width: 100%;
  padding: 0 10px;
  top: 0;
  background-color: var(--background-navbar-color);
  transition: all 0.4s ease-in-out;
  border-bottom: 1px solid var(--border-color);
  z-index: 10;
  @media (max-width: 767px) {
    transform: translateY(-100%);
    z-index: 20;
  }

  .Nav-Container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 100px;
    img {
      width: 60%;
    }
  }

  .nav-links {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-family: 'Nunito', sans-serif;
    .active-class {
      color: var(--white-color-2);
      background-color: var(--primary-color-light);
    }
    a {
      color: var(--font-light-color);
      text-decoration: none;
      position: relative;
      font-family: 'Nunito', sans-serif;
      padding: 15px 20px;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 2px;
      transition: all 0.5s ease-in-out;

      :hover {
        color: var(--white-color-2);
        transition: all 0.8 ease-in-out;
        background-color: var(--primary-color);
        z-index: 10;
      }
    }
    a:hover::before {
      width: 100%;
      height: 100%;
    }
  }
`;
