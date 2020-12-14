import React from 'react';
import styles from './Select.module.css';

export default function Select({label, options, onChange, defaultValue}) {

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
