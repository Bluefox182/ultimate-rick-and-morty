import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ setSearch, updatePageNumber }) {
  return (
    <StyledSearchBar>
      <div className='Search'>
        <div class='icon'>
          <SearchIcon />
        </div>
        <input
          className='Search__input '
          type='text'
          onChange={(e) => {
            updatePageNumber(1);
            setSearch(e.target.value);
          }}
          placeholder='Search your favorites characters...'
        />
      </div>
    </StyledSearchBar>
  );
}

export default SearchBar;

const StyledSearchBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .Search {
    display: flex;
    width: 70%;
    background-color: #fafafa;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    @media (max-width: 480px) {
      width: 90%;
    }
  }

  .Search__input {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    margin: 0;
    border: none;
    background-color: #fafafa;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #000;
    outline: none;
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
  .Search__input:focus {
    outline: none;
  }
  .Search input,
  select,
  textarea {
    color: #354259;
    font-family: 'Montserrat', sans-serif;
  }

  .icon {
    width: 24px;
    color: var(--secondary-color);
    svg {
      @media (max-width: 480px) {
        font-size: 18px;
      }
    }
  }
`;
