import React from 'react';
import styled from 'styled-components';

function FilterButton({ input, task, updatePageNumber, index, name }) {
  return (
    <StyledFilterButton>
      <div>
        <style jsx>
          {`
            .x:checked + label {
              background-color: #0b5ed7;
              color: white;
            }
            input[type='radio'] {
              display: none;
            }
          `}
        </style>

        <div className='form-check'>
          <input
            className='form-check-input x'
            type='radio'
            name={name}
            id={`${name}-${index}`}
          />
          <label
            onClick={(x) => {
              task(input);
              updatePageNumber(1);
            }}
            className='btn btn-outline-primary'
            for={`${name}-${index}`}
          >
            {input}
          </label>
        </div>
      </div>
    </StyledFilterButton>
  );
}

export default FilterButton;

const StyledFilterButton = styled.div``;
