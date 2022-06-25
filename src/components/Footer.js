import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <StyledFooter>
      <p>2022 Bluefox182 | @All Rights Reserved</p>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  font-size: 10px;
  background-color: var(--font-dark-color-2);
  text-align: center;

  p {
    padding: 5px;
    font-size: 11px;
  }
`;
