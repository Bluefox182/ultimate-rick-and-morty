import React from 'react';
import FilterButton from './FilterButton';

import styled from 'styled-components';

function Status({ updateStatus, updatePageNumber }) {
  let status = ['Alive', 'Dead', 'Unknown'];
  return (
    <StyledStatus>
      <div className='Status-List'>
        <h2>Status</h2>
        <div className='Status-Filter'>
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
    </StyledStatus>
  );
}

export default Status;

const StyledStatus = styled.div`
  .Status-List h2 {
    font-size: 18px;
    color: var(--primary-color);
  }
`;
