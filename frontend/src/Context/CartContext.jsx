import React, { createContext, useState, useEffect,useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Create context
import { AuthContext } from "./AuthContext";
export const CartContext = createContext();

// Provide context
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { accessToken } = useContext(AuthContext);

//   const fetchCart = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/user/cart/");
//       setCartItems(response.data);
//     } catch (error) {
//       console.error("Failed to fetch cart items:", error);
//     }
//   };
  const navigate = useNavigate();

  // Function to add an item to the cart
  const addToCart = (productId, quantity = 1) => {
    const token = accessToken;
    console.log("Token" , token)
    // Check if user is authenticated
    if (!token) {
      alert("Please log in to add items to your cart.");
      navigate("/login"); // Redirect to login page
      return;
    }

    // If authenticated, make API request to add item to the cart
    axios
      .post(
        "http://127.0.0.1:8000/user/cart/add/",
        {
          product_id: productId,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_Token')}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("Item added to cart");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("Your session has expired. Please log in again.");
          localStorage.removeItem("access_Token");
          navigate("/login"); // Redirect to login page
        } else {
          console.error("Error adding to cart:", error);
          alert("There was an error adding the item to the cart.");
        }
      });
  };
  const updateCartItem = async (cartItemId, quantity) => {
    try {
      await axios.put(`http://127.0.0.1:8000/user/cart/update/${cartItemId}/`, {
        quantity,
      });
    //   fetchCart(); // Refresh the cart after updating
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/user/cart/remove/${cartItemId}/`
      );
    //   fetchCart(); // Refresh the cart after removal
    } catch (error) {
      console.error("Failed to remove item from cart:", error);
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete("http://127.0.0.1:8000/user/cart/clear/");
      setCartItems([]); // Clear the cart state
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  };

//   useEffect(() => {
//     fetchCart();
//   }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
