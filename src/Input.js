import React from 'react';
import styles from './Input.module.css';

export default function Input({placeholder, onChange}) {

  function onChangeHandler(e) {
    const value = e.target.value;
    onChange(value);
  }

  function onEnter(e) {
    const value = e.target.value;
    if (e.charCode !== 13 || value === '') return;
      onChangeHandler(e);
  }

  return (
    <input className={styles.input} placeholder={placeholder} onChange={onChangeHandler} onKeyPress={onEnter} />
  );
}
