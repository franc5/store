import React from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';

function PaginationButton ({ onClick, children, activePage}) { 

  function onPageSelected(e) {
    e.stopPropagation();
    onClick(children);
  }

  return (
    <li className={styles.PaginationButton}>
      <a onClick={onPageSelected} href='#' target='_blank'> {/* target attribute is added to make visible the styles of a:focus */}
        { (activePage) ? <b>{children}</b>: children }
      </a>
    </li>
  );
}

// Set the propTypes for the component
PaginationButton.propTypes = {
  children: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PaginationButton