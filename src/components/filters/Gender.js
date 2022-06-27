import React from 'react';
import FilterButton from './FilterButton';
import styled from 'styled-components';

function Gender({ updateGender, updatePageNumber }) {
  let genders = ['female', 'male', 'genderless', 'unknown'];
  return (
    <StyledGender>
      <div className='Gender-List'>
        <h2>Gender</h2>
        <div className='Gender-Filter'>
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
    </StyledGender>
  );
}

export default Gender;

const StyledGender = styled.div`
  .Gender-List h2 {
    font-size: 18px;
    color: var(--primary-color);
  }
`;
