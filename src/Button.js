import React from 'react';
import styles from './Button.module.css';

export default function Button({color, children, onClick}) {
  const styleButton = `${styles.button} `;
  const style = (color === 'red') ? styleButton + styles.red : styleButton + styles.blue;

  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}
