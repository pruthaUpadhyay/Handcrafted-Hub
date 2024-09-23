import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext'; // Adjust path if necessary
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import './AddToCartButton.css'

const AddToCartButton = ({ productId,quantity,selectedSize,hasSize }) => {
    const navigate = useNavigate();
    const { user, accessToken } = useContext(AuthContext);
    const {addToCart} = useContext(CartContext)
    console.log(user)
    const handleAddToCart = async () => {
       addToCart(productId,quantity,selectedSize,hasSize)
    }
    return (
        <button onClick={handleAddToCart} className='addToCart'>Add to Cart</button>
    );
};

export default AddToCartButton;
