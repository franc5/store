import React from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';

function Button({color = 'blue', children, onClick}) {  // When color is undefined, this will set its value to 'blue'
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
  color: PropTypes.oneOf(['blue','red']),
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button