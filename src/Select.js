import React from 'react';
import styles from './Select.module.css';
import PropTypes from 'prop-types';


function Select({label, options, onChange, defaultValue}) {

  const allOptions = options.map( (item, idx) =>
    <option key={item.id} value={idx}> {item.name} </option>
  );
  
  function onChangeHandler(e) {
    const {value} = e.target;
    const name = options[value].name;
    const id = options[value].id;
    onChange(id, name);
  }

  return (
    <label className={styles.Label}> {label}
      <select onChange={onChangeHandler} className={styles.Select} defaultValue={defaultValue}>
        {allOptions}
      </select>
    </label>
  );
}

// Set the propTypes for the component
Select.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default Select

