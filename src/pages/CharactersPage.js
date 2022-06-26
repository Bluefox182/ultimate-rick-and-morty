import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardCharacter from '../components/CardCharacter';

import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

function CharactersPage() {
  let [pageNumber, updatePageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState('');
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <StyledCharactersPage>
      <div className='Main-Container'>
        <div className='Left-Container'>
          <div className='Filter-Container'>
            <h1>Left Container</h1>
          </div>
        </div>
        <div className='Right-Container'>
          <div className='SearchBar'>
            <SearchBar
              setSearch={setSearch}
              updatePageNumber={updatePageNumber}
            />
          </div>
          <div className='Card-Container'>
            <CardCharacter results={results} />
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </StyledCharactersPage>
  );
}

export default CharactersPage;

const StyledCharactersPage = styled.div`
  .Main-Container {
    display: flex;
    padding: 20px 0;
    width: 100%;
  }

  .Left-Container {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .Right-Container {
    width: 75%;
    display: flex;
    padding: 5px 0;
    padding-right: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .SearchBar {
    display: flex;
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
`;
