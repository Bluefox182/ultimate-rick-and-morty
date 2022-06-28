import React, { useEffect, useState } from 'react';
import CardCharacter from '../components/CardCharacter';
import InputGroup from '../components/filters/InputGroup';
import styled from 'styled-components';

function EpisodesPage() {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, episode, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <StyledEpisodes>
      <div className='Main-Container'>
        <div className='Left-Container'>
          <div>
            <h1>Pick Episode</h1>
            <InputGroup name='Episode' changeID={setID} total={51} />
          </div>
        </div>
        <div className='Right-Container'>
          <div className='Top-Episodes'>
            <h1>
              Episode Name : <span>{name === '' ? 'Unknown' : name}</span>
            </h1>
            <h1>
              Air Date: <span>{air_date === '' ? 'Unknown' : air_date}</span>
            </h1>
          </div>
          <div className='Card-Container'>
            <CardCharacter page='/episodes/' results={results} />
          </div>
        </div>
      </div>
    </StyledEpisodes>
  );
}

export default EpisodesPage;

const StyledEpisodes = styled.div`
  .Main-Container {
    display: flex;
    padding: 20px 0;
    width: 100%;
    font-family: 'Nunito', sans-serif;
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .Left-Container {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--font-light-color);
    h1 {
      font-size: 24px;
      color: var(--primary-color-light);
    }
    @media (max-width: 480px) {
      width: 100%;
    }
  }

  .Right-Container {
    width: 80%;
    display: flex;
    padding: 5px 0;
    padding-right: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 480px) {
      width: 100%;
      padding-right: 0;
    }
  }

  .Top-Episodes {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    color: var(--font-light-color);
  }

  .Card-Container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  h1 {
    font-size: 24px;
    padding: 5px 0;
  }
  span {
    font-size: 24px;
    color: var(--primary-color-light);
  }
`;
