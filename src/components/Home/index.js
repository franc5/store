import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import ItemList from '../ItemList';
import getItems from '../../api';

function Home() {

  const [items, setItems] = useState(undefined);
  useEffect(() => {
    getItems().then(items => setItems(items));
  }, []);

  if (!items) return 'Loading...';
  
  return (
    <ul className={styles.home}>
      {items.map((value, idx) =>
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