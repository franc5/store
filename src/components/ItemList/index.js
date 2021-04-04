import React from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';

function ItemList ({image, title, price}) {

  return (
    <div className={styles.itemListContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title}/>
      </div>
      <p title={title} className={styles.itemListTitle}> {title} </p>
      <p className={styles.itemListPrice}> {price} </p>
    </div>
  );
}

// Set the propTypes for the component
ItemList.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemList;