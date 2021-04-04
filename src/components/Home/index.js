import React from 'react';
import styles from './index.module.css';
import ItemList from '../ItemList';
import getItems from '../../api';

function Home() {

  return (
    <ul className={styles.home}>
      {getItems().map((value, idx) =>
        <li key={idx}>
          <ItemList
            image={value.image}
            title={value.title}
            price={value.price}
          />
        </li>
      )}
    </ul>
  );
}

export default Home;