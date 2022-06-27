import React from 'react';
import FilterButton from './FilterButton';
import styled from 'styled-components';

function Gender({ updateGender, updatePageNumber }) {
  let genders = ['female', 'male', 'genderless', 'unknown'];
  return (
    <StyledGender>
      <div className='accordion-item'>
        <h2 className='accordion-header' id='headingThree'>
          <button
            className='accordion-button collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseThree'
            aria-expanded='false'
            aria-controls='collapseThree'
          >
            Gender
          </button>
        </h2>
        <div
          id='collapseThree'
          className='accordion-collapse collapse'
          aria-labelledby='headingThree'
          data-bs-parent='#accordionExample'
        >
          <div className='accordion-body d-flex flex-wrap gap-3'>
            {genders.map((items, index) => {
              return (
                <FilterButton
                  name='gender'
                  index={index}
                  key={index}
                  updatePageNumber={updatePageNumber}
                  task={updateGender}
                  input={items}
                />
              );
            })}
          </div>
        </div>
      </div>
    </StyledGender>
  );
}

export default Gender;

const StyledGender = styled.div``;