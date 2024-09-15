import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext'; // Adjust path if necessary
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const AddToCartButton = ({ productId,quantity,selectedSize }) => {
    const navigate = useNavigate();
    const { user, accessToken } = useContext(AuthContext);
    const {addToCart} = useContext(CartContext)
    console.log(user)
    const handleAddToCart = async () => {
       addToCart(productId,quantity,selectedSize)
    }
    return (
        <button onClick={handleAddToCart}>Add to Cart</button>
    );
};

export default AddToCartButton;
