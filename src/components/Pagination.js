import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

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
        nextLabel='Next'
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel='Prev'
        previousClassName='PreviousButton'
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

const StyledPagination = styled.div``;
