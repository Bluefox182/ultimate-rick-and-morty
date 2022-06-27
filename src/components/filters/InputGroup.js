import React from 'react';
import styled from 'styled-components';

function InputGroup({ name, changeID, total }) {
  return (
    <StyledInputGroup>
      <div className='input-group mb-3'>
        <select
          onChange={(e) => changeID(e.target.value)}
          className='form-select'
          id={name}
        >
          <option value='1'>Choose...</option>
          {[...Array(total).keys()].map((x, index) => {
            return (
              <option value={x + 1}>
                {name} - {x + 1}
              </option>
            );
          })}
        </select>
      </div>
    </StyledInputGroup>
  );
}

export default InputGroup;

const StyledInputGroup = styled.div``;
