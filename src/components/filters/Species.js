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
      <div className='accordion-item '>
        <h2 className='accordion-header' id='headingTwo'>
          <button
            className='accordion-button collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseTwo'
            aria-expanded='false'
            aria-controls='collapseTwo'
          >
            Species
          </button>
        </h2>
        <div
          id='collapseTwo'
          className='accordion-collapse collapse'
          aria-labelledby='headingTwo'
          data-bs-parent='#accordionExample'
        >
          <div className='accordion-body d-flex flex-wrap gap-3'>
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
      </div>
    </StyledSpecies>
  );
}

export default Species;

const StyledSpecies = styled.div``;
