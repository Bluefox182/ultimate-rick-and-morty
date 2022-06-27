import React from 'react';
import FilterButton from './FilterButton';

import styled from 'styled-components';

function Status({ updateStatus, updatePageNumber }) {
  let status = ['Alive', 'Dead', 'Unknown'];
  return (
    <StyledStatus>
      <div className='accordion-item'>
        <h2 className='accordion-header' id='headingOne'>
          <button
            className='accordion-button'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseOne'
            aria-expanded='true'
            aria-controls='collapseOne'
          >
            Status
          </button>
        </h2>
        <div
          id='collapseOne'
          className='accordion-collapse collapse show'
          aria-labelledby='headingOne'
          data-bs-parent='#accordionExample'
        >
          <div className='accordion-body d-flex flex-wrap gap-3'>
            {status.map((item, index) => (
              <FilterButton
                key={index}
                index={index}
                name='status'
                task={updateStatus}
                updatePageNumber={updatePageNumber}
                input={item}
              />
            ))}
          </div>
        </div>
      </div>
    </StyledStatus>
  );
}

export default Status;

const StyledStatus = styled.div``;
