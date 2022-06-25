import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/img/Rick100.svg';
import styled from 'styled-components';

function NavBar({ navToggle }) {
  return (
    <StyledNavBar>
      <div className='Nav-Container'>
        <div className='logo'>
          <img src={logo} alt='Rick and Morty' />
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
  position: fixed;
  background-color: var(--background-navbar-color);
  transition: all 0.4s ease-in-out;
  border-bottom: 1px solid var(--border-color);
  z-index: 10;
  @media (max-width: 767px) {
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
    .active-class {
      color: var(--white-color-2);
      background-color: var(--primary-color-light);
    }
    a {
      color: var(--font-light-color);
      text-decoration: none;
      position: relative;
      padding: 15px 20px;
      font-weight: 500;
      font-size: 12px;
      letter-spacing: 3px;
      transition: all 0.4s ease-in-out;

      :hover {
        color: var(--white-color-2);
        transition: all 0.5s ease-in-out;
      }

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 50%;
        background-color: var(--primary-color);
        transition: 0.35s;
        z-index: -1;
      }
    }
    a:hover::before {
      width: 100%;
      height: 100%;
    }
  }
`;
