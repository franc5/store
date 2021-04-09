import React, { useState } from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';
import PaginationButton from './PaginationButton';

function Pagination ({totalPages, selectedPage = 1, onPageSelected}) {  //selectedPage is an optional prop with default value = 1.

  const paginationArray = new Array(totalPages);
  const [currentPage, setCurrentPage] = useState(selectedPage);

  return (
    <ul className={styles.pagination}>
      {paginationArray.fill().map( (_, idx) =>
        <PaginationButton
          onClick={pageNumber => {
            if(pageNumber === currentPage) return;
            setCurrentPage(pageNumber);
            onPageSelected(pageNumber);}}
          activePage={currentPage === idx +1}
          key={idx}
        >
          {idx+1}
        </PaginationButton>
      )}
    </ul>
  );
}

// Set the propTypes for the component
Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  selectedPage: PropTypes.number,
  onPageSelected: PropTypes.func.isRequired
};

export default Pagination;