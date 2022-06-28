import React from 'react';
import styled from 'styled-components';

function FilterButton({ input, task, updatePageNumber, index, name }) {
  return (
    <StyledFilterButton>
      <div className='Form-Container'>
        <button
          className='Form-Radio'
          name={name}
          id={`${name}-${index}`}
          onClick={(x) => {
            task(input);
            updatePageNumber(1);
          }}
          for={`${name}-${index}`}
        >
          {input}
        </button>
      </div>
    </StyledFilterButton>
  );
}

export default FilterButton;

const StyledFilterButton = styled.div`
  .Form-Label {
    font-size: 12px;
  }

  .Form-Container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    button {
      width: 70%;
      height: 30px;
      border: none;
      border-radius: 5px;
      background-color: #42c2ff;
      color: var(--white-color-2);
      font-size: 12px;
      cursor: pointer;
      outline: none;
      transition: background-color 0.2s ease-in-out;
      &:hover {
        background-color: var(--primary-color);
        color: var(--white-color-2);
      }
      &:active {
        background-color: var(--primary-color);
        color: var(--font-light-color-3);
      }
    }
  }
`;
