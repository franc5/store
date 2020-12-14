import React from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';

function Button({color, children, onClick}) {
  const styleButton = `${styles.button} `;
  const style = (color === 'red') ? styleButton + styles.red : styleButton + styles.blue;

  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}

// Set the propTypes for the component
Button.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button