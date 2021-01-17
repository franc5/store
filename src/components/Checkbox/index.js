import React from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';


function Checkbox({label, checked, onChange}) {

  function onChangeHandler(e) {
    const {checked} = e.target;
    onChange(checked);
  }

  return (
    <label>
      <input className={styles.checkBox} onChange={onChangeHandler} defaultChecked={checked} type="checkbox"/> 
      {label}
    </label>
  );
}

// Set the propTypes for the component
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Checkbox