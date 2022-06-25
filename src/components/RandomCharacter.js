import React from 'react';
import styled from 'styled-components';

class RandomCharacter extends React.Component {
  _state = {
    character: {},
  };
  get state() {
    return this._state;
  }
  set state(value) {
    this._state = value;
  }

  componentDidMount() {
    this.fetchRandomCharacter();
  }

  requestCharacterById = async (id = 1) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const json = await response.json();
    this.setState({ character: json });
    console.log(json);
  };

  fetchRandomCharacter = () => {
    const numberOfCharacters = 493;
    const randomNumber = Math.floor(Math.random() * numberOfCharacters);
    this.requestCharacterById(randomNumber);
  };

  render() {
    const { name, image, status, species, gender } = this.state.character;
    return (
      <StyledRandomCharacter>
        <div className='Characters-Container'>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <div className='Characters-Info'>
            <ul>
              <li>{status}</li>
              <li>{species}</li>
              <li>{gender}</li>
            </ul>
            <button onClick={this.fetchRandomCharacter}>New Character</button>
          </div>
        </div>
      </StyledRandomCharacter>
    );
  }
}

export default RandomCharacter;

const StyledRandomCharacter = styled.div`
  padding: 10px 40px;
  .Characters-Container {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 300px;
    border-radius: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 30px; */
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    img {
      width: 100%;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
    }
    h2 {
      padding: 20px;
      color: #354259;
      font-size: 24px;
      font-weight: 500;
      font-family: Nunito, sans-serif;
    }
    ul {
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
      color: #8cc0de;
      display: flex;
      padding: 10px 0;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    li {
      padding: 10px;
      font-family: 'Nunito', sans-serif;
    }
    button {
      background-color: #42c2ff;
      border: none;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
      padding: 10px 40px;
      margin-bottom: 30px;
      transition: all 0.3s ease-in-out;
      font-family: 'Montserrat', sans-serif;
      :hover {
        background-color: #354259;
        transform: scale(1.1);
        transition: 0.5s;
      }
    }
    /* Responsive */
    @media (max-width: 520px) {
      width: 95%;
    }
  }
  .Characters-Info {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
