import React from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';


function Select({label, options, onChange, defaultValue}) {

  function onChangeHandler(e) {
    const {value: selectedOptionIdx} = e.target;
    const {id, name} = options[selectedOptionIdx]
    onChange(id, name);
  }

  return (
    <label className={styles.label}> {label}
      <select onChange={onChangeHandler} className={styles.select} defaultValue={defaultValue}>
        {options.map( (item, idx) => <option key={item.id} value={idx}> {item.name} </option>)}
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

