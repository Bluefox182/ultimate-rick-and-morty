import React from 'react';
import Gender from './Gender';
import Species from './Species';
import Status from './Status';

import styled from 'styled-components';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

function Filter({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) {
  const clear = (e) => {
    e.preventDefault();
    updateStatus('');
    updateGender('');
    updateSpecies('');
    updatePageNumber(1);
  };

  return (
    <StyledFilter>
      <div className='Filter-Container'>
        <div className='Filter-Title'>
          <h1>Filters</h1>
          <div onClick={clear} className='Clear-Filter'>
            <SettingsBackupRestoreIcon />
            <p>Clear Filters</p>
          </div>
        </div>

        <div className='Filter-Items'>
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

const StyledFilter = styled.div`
  .Filter-Container {
    color: var(--font-light-color);
    margin: 0 10px;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .Filter-Title {
    display: flex;
    align-items: center;
    h1 {
      font-size: 24px;
      color: var(--primary-color-light);
    }
  }

  .Clear-Filter {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    color: var(--font-light-color-3);
    p {
      font-size: 10px;
    }
    svg {
      margin-right: 5px;
      font-size: 18px;
      &:hover {
        color: var(--primary-color-light);
        cursor: pointer;
      }
    }
  }
`;
