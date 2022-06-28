import React from 'react';
import FilterButton from './FilterButton';
import styled from 'styled-components';

function Species({ updateSpecies, updatePageNumber }) {
  let species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',
  ];
  return (
    <StyledSpecies>
      <div className='Species-List'>
        <h2>Species</h2>
        <div className='Species-Filter'>
          {species.map((item, index) => {
            return (
              <FilterButton
                name='species'
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateSpecies}
                input={item}
              />
            );
          })}
        </div>
      </div>
    </StyledSpecies>
  );
}

export default Species;

const StyledSpecies = styled.div`
  .Species-List h2 {
    font-size: 18px;
    color: var(--primary-color);
    padding-top: 20px;
  }
`;
