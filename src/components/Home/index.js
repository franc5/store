import React from 'react';
import styles from './index.module.css';
import ItemList from './ItemList';

function Home() {
  

  return (
    <li className={styles.home}>
      {items.map( (value, idx) =>
        <ItemList 
          title={value.title}
          img={value.img}
          price={value.price}
          key={idx}
        />
      )}
    </li>
  )

};

export default Home