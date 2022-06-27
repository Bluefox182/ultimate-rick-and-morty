import React from 'react';
import Gender from './Gender';
import Species from './Species';
import Status from './Status';

import styled from 'styled-components';

function Filter({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) {
  let clear = () => {
    updateStatus('');
    updateGender('');
    updateSpecies('');
    updatePageNumber(1);
    window.location.reload(false);
  };
  return (
    <StyledFilter>
      <div>
        <div>Filters</div>
        <div style={{ cursor: 'pointer' }} onClick={clear} className=''>
          Clear Filters
        </div>
        <div className='accordion' id='accordionExample'>
          <Status
            updatePageNumber={updatePageNumber}
            updateStatus={updateStatus}
          />
          <Species
            updatePageNumber={updatePageNumber}
            updateSpecies={updateSpecies}
          />
          <Gender
            updatePageNumber={updatePageNumber}
            updateGender={updateGender}
          />
        </div>
      </div>
    </StyledFilter>
  );
}

export default Filter;

const StyledFilter = styled.div``;
