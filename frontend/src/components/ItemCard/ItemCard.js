import React from 'react';
import './ItemCard.css'; // Import CSS for styling

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-price">{item.price}</p>
        <button className="item-button">View Details</button>
      </div>
    </div>
  );
};

export default ItemCard;
