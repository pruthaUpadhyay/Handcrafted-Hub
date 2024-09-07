import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create context
export const CartContext = createContext();

// Provide context
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const fetchCart = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/user/cart/');
            setCartItems(response.data);
        } catch (error) {
            console.error("Failed to fetch cart items:", error);
        }
    };
    

    const addToCart = async (productId, quantity = 1) => {
        try {
            const response = await axios.post(`http://127.0.0.1:8000/user/cart/add/${productId}/`, { product_id: productId, quantity });
            fetchCart(); // Refresh the cart after adding
        } catch (error) {
            console.error("Failed to add to cart:", error);
        }
    };
    

    const updateCartItem = async (cartItemId, quantity) => {
        try {
            await axios.put(`http://127.0.0.1:8000/user/cart/update/${cartItemId}/`, { quantity });
            fetchCart(); // Refresh the cart after updating
        } catch (error) {
            console.error("Failed to update cart item:", error);
        }
    };
    

    const removeFromCart = async (cartItemId) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/user/cart/remove/${cartItemId}/`);
            fetchCart(); // Refresh the cart after removal
        } catch (error) {
            console.error("Failed to remove item from cart:", error);
        }
    };
    
    const clearCart = async () => {
        try {
            await axios.delete('http://127.0.0.1:8000/user/cart/clear/');
            setCartItems([]); // Clear the cart state
        } catch (error) {
            console.error("Failed to clear cart:", error);
        }
    };
    
    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateCartItem, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
