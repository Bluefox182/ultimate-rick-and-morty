import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import RandomCharacter from '../components/RandomCharacter';

function HomePage() {
  return (
    <StyledHome>
      <div className='Hero-Container'>
        <div className='Left-Hero'>
          <h1>The Ultimate</h1>
          <h1>Rick And Morty App</h1>
          <Link to='/characters'>
            <button>Explore All Characters</button>
          </Link>
        </div>
        <div className='Right-Hero'>
          <RandomCharacter />
        </div>
      </div>
    </StyledHome>
  );
}

export default HomePage;

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .Hero-Container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 80px 30px;
  }

  .Left-Hero {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    margin-bottom: 30px;
    h1 {
      font-family: 'Nunito', sans-serif;
      font-size: 56px;
      color: var(--primary-color-light);
    }
    button {
      background-color: #42c2ff;
      border: none;
      width: 90%;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
      padding: 10px 40px;
      margin: 20px 40px;
      transition: all 0.3s ease-in-out;
      font-family: 'Montserrat', sans-serif;
      :hover {
        background-color: #354259;
        transform: scale(1.1);
        transition: 0.5s;
      }
    }
  }

  .Right-Hero {
    display: flex;
    width: 50%;
    justify-content: center;
  }

  /* Responsive */
  @media (max-width: 520px) {
    .Hero-Container {
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding-left: 10px;
      padding-right: 10px;
    }
    .Left-Hero {
      width: 100%;
      h1 {
        text-align: center;
        font-size: 36px;
      }
      button {
        margin-top: 40px;
        width: 80%;
      }
    }
    .Right-Hero {
      width: 100%;
    }
  }

  @media (min-width: 521px) and (max-width: 767px) {
  }

  @media (min-width: 521px) and (max-width: 1024px) {
    .Hero-Container {
      flex-direction: column;
    }
    .Left-Hero {
      width: 100%;
      h1 {
        text-align: center;
      }
      button {
        margin-top: 40px;
      }
    }
    .Right-Hero {
      width: 100%;
      padding: 40px 0;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
  }

  @media (min-width: 1281px) and (max-width: 1600px) {
  }
`;
