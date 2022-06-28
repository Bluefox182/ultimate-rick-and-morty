import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CardCharacter({ page, results }) {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name } = x;

      return (
        <StyledCardCharacter>
          <div className='Characters-Container'>
            <img src={image} alt='{name}' />
            <h2>{name}</h2>
            <Link to={`${id}`} key={id}>
              <button>Read More</button>
            </Link>
          </div>
        </StyledCardCharacter>
      );
    });
  } else {
    display = 'No Characters Found :/';
  }

  return <>{display}</>;
}

export default CardCharacter;

const StyledCardCharacter = styled.div`
  .Characters-Container {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 200px;
    margin: 15px;
    border-radius: 30px;
    align-items: center;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    @media (max-width: 480px) {
      width: 85%;
    }
  }

  .Characters-Container img {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    width: 100%;
  }

  .Characters-Container h2 {
    padding: 15px;
    color: #354259;
  }

  .Characters-Container button {
    background-color: #42c2ff;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    padding: 10px 40px;
    margin-bottom: 20px;
    transition: all 0.3s ease-in-out;
    font-family: 'Montserrat', sans-serif;
    :hover {
      background-color: #354259;
      transform: scale(0.95);
      transition: 0.5s;
    }
  }
`;
