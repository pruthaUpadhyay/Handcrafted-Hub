import React from 'react';
// import ItemCard from './ItemCard';
import './ItemList.css'; // Import CSS for styling
import ItemCard from '../ItemCard/ItemCard';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
