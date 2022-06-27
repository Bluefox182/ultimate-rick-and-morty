import React from 'react';
import styled from 'styled-components';

function FilterButton({ input, task, updatePageNumber, index, name }) {
  return (
    <StyledFilterButton>
      <div className='Form-Container'>
        <input
          className='Form-Radio'
          type='radio'
          name={name}
          id={`${name}-${index}`}
          onClick={(x) => {
            task(input);
            updatePageNumber(1);
          }}
          for={`${name}-${index}`}
        />
        <label className='Form-Label'>{input}</label>
      </div>
    </StyledFilterButton>
  );
}

export default FilterButton;

const StyledFilterButton = styled.div`
  .Form-Label {
    font-size: 12px;
  }
`;
