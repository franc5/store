import React from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';

function PaginationButton ({ onClick, children, activePage}) {

  function onPageSelected(e) {
    e.preventDefault();
    e.stopPropagation();
    onClick(children);
  }

  return (
    <li className={styles.paginationButton}>
      <a onClick={onPageSelected} href='#'>
        { (activePage) ? <b>{children}</b>: children }
      </a>
    </li>
  );
}

// Set the propTypes for the component
PaginationButton.propTypes = {
  children: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  activePage: PropTypes.bool,
};

export default PaginationButton;