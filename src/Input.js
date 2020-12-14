import React from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

function Input({placeholder, onChange}) {

  function onChangeHandler(e) {
    const value = e.target.value;
    onChange(value);
  }

  function onKeyPressHandler(e) {
    if (e.charCode !== 13) return;
      onChangeHandler(e);
  }

  return (
    <input className={styles.input} placeholder={placeholder} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} />
  );
}

// Set the propTypes for the component
Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input
