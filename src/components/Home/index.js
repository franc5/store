import React from 'react';
import styles from './index.module.css';
import ItemList from '../ItemList';
import {itemsReturned} from '../../api';

function Home() {

  return (
    <ul className={styles.home}>
      {itemsReturned.map((value, idx) => 
        <li key={idx}>
        <ItemList 
          image={value.image}
          title={value.title}
          price={value.price}
        />
        </li>
      )}
    </ul>
  )
};

export default Home