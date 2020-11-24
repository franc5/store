import React from 'react';
import styles from './Button.module.css';

export default function Button(props) {
  const color = props.color
  const label = props.label
  
  return (
    <button style={{backgroundColor:color}} className={styles.button}>
      {label}
    </button>
  );
}
