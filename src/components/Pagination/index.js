import React, { useState } from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';
import PaginationButton from './PaginationButton/index.js'

function Pagination ({totalPages, selectedPage = 1}) {  //selectedPage is an optional prop with default value = 1.

  const paginationArray = new Array(totalPages)
  const [currentPage, setcurrentPage] = useState(selectedPage);

  return (
    <ul className={styles.Pagination}>  
      {paginationArray.fill().map( (_, idx) =>
        <PaginationButton 
          onClick={pageNumber => setcurrentPage(pageNumber)} 
          activePage={currentPage === idx +1}
          key={idx}>
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
};

export default Pagination