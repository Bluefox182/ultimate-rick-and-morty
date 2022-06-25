import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function ToggleMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <StyledToggleButton>
      <div className='menu-toggle'>
        <IconButton onClick={handleClick}>
          <MenuIcon clicked={click} />
        </IconButton>
      </div>

      <NavBackground clicked={click}></NavBackground>
      <Navigation clicked={click} className='nav-toggle'>
        <List>
          <ItemLink>
            <Link onClick={handleClick} to='/'>
              Home
            </Link>
          </ItemLink>
          <ItemLink>
            <Link onClick={handleClick} to='/characters'>
              Characters
            </Link>
          </ItemLink>
          <ItemLink>
            <Link onClick={handleClick} to='/episodes'>
              Episodes
            </Link>
          </ItemLink>
          <ItemLink>
            <Link onClick={handleClick} to='/locations'>
              Location
            </Link>
          </ItemLink>
        </List>
      </Navigation>
    </StyledToggleButton>
  );
}

const NavBackground = styled.div`
  position: fixed;
  top: 0;
  background-image: #4d74e6
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? 'scale(80)' : 'scale(0)')};
  transition: transform 0.8s;
`;

const Navigation = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 15;
  width: ${(props) => (props.clicked ? '100%' : '0')};
  opacity: ${(props) => (props.clicked ? '1' : '0')};
  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: #2e4c6d;
  opacity: 0.9;
`;

const ItemLink = styled.li`
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none;
  color: #eeeeee;
  padding: 0.5rem 1.5rem;
  width: 100%;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #057FFF 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: #2a57dc 
    transform: translateX(1rem);
  }
  a {
    color: var(--white-color-2);
  }
`;

const StyledToggleButton = styled.div`
  .menu-toggle {
    position: absolute;
    left: 20px;
    top: 0;
    display: flex;
    z-index: 20;
    cursor: pointer;
    svg {
      font-size: 3rem;
      color: var(--white-color);
      :hover {
        color: var(--primary-color-light);
        transition: color 0.5s ease-in-out;
      }
    }
  }
  @media (min-width: 768px) {
    .menu-toggle {
      display: none;
    }
  }
`;
export default ToggleMenu;
