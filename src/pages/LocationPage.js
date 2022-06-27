import React, { useEffect, useState } from 'react';
import CardCharacter from '../components/CardCharacter';
import InputGroup from '../components/filters/InputGroup';
import styled from 'styled-components';

function LocationPage() {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);
  return (
    <StyledLocation>
      <div className='Main-Container'>
        <div className='Left-Container'>
          <h1>Pick Location</h1>
          <InputGroup name='Location' changeID={setNumber} total={126} />
        </div>

        <div className='Right-Container'>
          <div className='Top-Locations '>
            <h1>
              Location :<span> {name === '' ? 'Unknown' : name}</span>
            </h1>
            <h1>
              Dimension: <span>{dimension === '' ? 'Unknown' : dimension}</span>
            </h1>
            <h1>
              Type: <span>{type === '' ? 'Unknown' : type}</span>
            </h1>
          </div>
          <div className='Card-Container'>
            <CardCharacter page='/location/' results={results} />
          </div>
        </div>
      </div>
    </StyledLocation>
  );
}

export default LocationPage;

const StyledLocation = styled.div`
  .Main-Container {
    display: flex;
    padding: 20px 0;
    width: 100%;
    font-family: 'Nunito', sans-serif;
  }

  .Left-Container {
    width: 25%;
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
  }

  .Right-Container {
    width: 75%;
    display: flex;
    padding: 5px 0;
    padding-right: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--font-light-color);
  }

  .Top-Locations {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
  }

  .Card-Container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  h1 {
    font-size: 24px;
    padding: 2px 0;
  }
  span {
    font-size: 24px;
    color: var(--primary-color-light);
  }
`;
