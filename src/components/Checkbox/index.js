import React from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';


function Checkbox({label, initialValue = false, onChange}) {  //initialValue is an optional prop, set to true to check the box.

  function onChangeHandler(e) {
    const {checked} = e.target;
    onChange(checked);
  }

  return (
    <label className={styles.checkBoxLabel}>
      <input className={styles.checkBox} onChange={onChangeHandler} defaultChecked={initialValue} type="checkbox"/> 
      {label}
    </label>
  );
}

// Set the propTypes for the component
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  initialValue: PropTypes.bool,
};

export default Checkbox;