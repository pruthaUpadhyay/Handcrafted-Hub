import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const WishlistContext = createContext();

// Provide context
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { user } = useContext(AuthContext); // Get user from AuthContext
  const navigate = useNavigate();

  // Fetch wishlist items
  const fetchWishlist = async () => {
    if (!user) {
      console.error('User is not logged in');
      return;
    }

    try {
      const response = await axios.get(`http://127.0.0.1:8000/user-fav/wishlist/${user.user_id}/`);
      setWishlistItems(response.data.wishlist || []);
    } catch (error) {
      console.error('Error fetching wishlist items:', error.response?.data || error);
    }
  };

  // Add an item to the wishlist
  const addToWishlist = async (productId, productName) => {
    if (!user) {
      alert('Please log in to add items to your wishlist.');
      navigate('/login');
      return;
    }

    try {
      await axios.post(
        'http://127.0.0.1:8000/user-fav/wishlist/add/',
        {
          user_id: user.user_id,
          product_id: productId,
          product_name: productName, // Include product name
        }
      );
      fetchWishlist(); // Refresh the wishlist after adding
      alert('Item added to wishlist');
    } catch (error) {
      console.error('Error adding to wishlist:', error.response?.data || error);
    }
  };

  // Remove item from the wishlist
  const removeFromWishlist = async (productId) => {
    if (!user) {
      alert('Please log in to remove items from your wishlist.');
      navigate('/login');
      return;
    }

    try {
      await axios.delete(
        'http://127.0.0.1:8000/user-fav/wishlist/remove/',
        {
          data: {
            user_id: user.user_id,
            product_id: productId,
          }
        }
      );
      fetchWishlist(); // Refresh the wishlist after removal
    } catch (error) {
      console.error('Error removing from wishlist:', error.response?.data || error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchWishlist();
    }
  }, [user]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        fetchWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
