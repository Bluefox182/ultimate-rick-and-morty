import React from 'react';
import styled from 'styled-components';

function InputGroup({ name, changeID, total }) {
  return (
    <StyledInputGroup>
      <div className='input-group mb-3'>
        <select
          onChange={(e) => changeID(e.target.value)}
          className='Form-Select'
          id={name}
        >
          <option value='1' disabled>
            Choose...
          </option>
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

const StyledInputGroup = styled.div`
  .Form-Select {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin-bottom: 0;
    width: 100%;
    &:focus {
      border-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
`;
