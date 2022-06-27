import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Pagination({ pageNumber, info, updatePageNumber }) {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <StyledPagination>
      <ReactPaginate
        className='Pagination'
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel={<ArrowBackIosIcon fontSize='large' />}
        previousClassName='PreviousButton'
        nextLabel={<ArrowForwardIosIcon fontSize='large' />}
        nextClassName='NextButton'
        activeClassName='active'
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName='page-item'
        pageLinkClassName='page-link'
      />
    </StyledPagination>
  );
}

export default Pagination;

const StyledPagination = styled.div`
  .Pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 20px 0;
    list-style: none;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    .page-item,
    .break {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      color: var(--font-light-color);
      &:hover {
        background-color: var(--primary-color);
        color: var(--white-color-2);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
      }
    }
    .active {
      background-color: var(--primary-color-light);
      color: var(--white-color-2);
    }

    .PreviousButton,
    .NextButton {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--font-light-color);
    }

    .PreviousButton:hover,
    .NextButton:hover {
      color: var(--primary-color-light);
      cursor: pointer;
      transition: all 0.4s ease-in-out;
    }
  }
`;
