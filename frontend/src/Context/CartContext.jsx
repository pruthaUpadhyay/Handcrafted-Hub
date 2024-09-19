// // import React, { createContext, useState, useEffect,useContext } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // // Create context
// // import { AuthContext } from "./AuthContext";
// // export const CartContext = createContext();

// // // Provide context
// // export const CartProvider = ({ children }) => {
// //   const [cartItems, setCartItems] = useState([]);
// //   const { accessToken } = useContext(AuthContext);

// // //   const fetchCart = async () => {
// // //     try {
// // //       const response = await axios.get("http://127.0.0.1:8000/user/cart/");
// // //       setCartItems(response.data);
// // //     } catch (error) {
// // //       console.error("Failed to fetch cart items:", error);
// // //     }
// // //   };
// //   const navigate = useNavigate();

// //   // Function to add an item to the cart
// //   const addToCart = (productId, quantity = 1) => {
// //     const token = localStorage.getItem('access_token');
// //     console.log("Token" , token)
// //     // Check if user is authenticated
// //     if (!token) {
// //       alert("Please log in to add items to your cart.");
// //       navigate("/login"); // Redirect to login page
// //       return;
// //     }

// //     // If authenticated, make API request to add item to the cart
// //     axios
// //       .post(
// //         "http://127.0.0.1:8000/user/cart/add/",
// //         {
// //           product_id: productId,
// //           quantity: quantity,
// //         },
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         }
// //       )
// //       .then((response) => {
// //         console.log(response.data);
// //         alert("Item added to cart");
// //       })
// //       .catch((error) => {
// //         if (error.response.status === 401) {
// //           alert("Your session has expired. Please log in again.");
// //           localStorage.removeItem("access_Token");
// //           navigate("/login"); // Redirect to login page
// //         } else {
// //           console.error("Error adding to cart:", error);
// //           alert("There was an error adding the item to the cart.");
// //         }
// //       });
// //   };
// //   const updateCartItem = async (cartItemId, quantity) => {
// //     try {
// //       await axios.put(`http://127.0.0.1:8000/user/cart/update/${cartItemId}/`, {
// //         quantity,
// //       });
// //     //   fetchCart(); // Refresh the cart after updating
// //     } catch (error) {
// //       console.error("Failed to update cart item:", error);
// //     }
// //   };

// //   const removeFromCart = async (cartItemId) => {
// //     try {
// //       await axios.delete(
// //         `http://127.0.0.1:8000/user/cart/remove/${cartItemId}/`
// //       );
// //     //   fetchCart(); // Refresh the cart after removal
// //     } catch (error) {
// //       console.error("Failed to remove item from cart:", error);
// //     }
// //   };

// //   const clearCart = async () => {
// //     try {
// //       await axios.delete("http://127.0.0.1:8000/user/cart/clear/");
// //       setCartItems([]); // Clear the cart state
// //     } catch (error) {
// //       console.error("Failed to clear cart:", error);
// //     }
// //   };

// // //   useEffect(() => {
// // //     fetchCart();
// // //   }, []);

// //   return (
// //     <CartContext.Provider
// //       value={{
// //         cartItems,
// //         addToCart,
// //         updateCartItem,
// //         removeFromCart,
// //         clearCart,
// //       }}
// //     >
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };
// import React, { createContext, useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "./AuthContext";

// // Create context
// export const CartContext = createContext();

// // Provide context
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const { accessToken } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // Function to fetch cart items
//   const fetchCart = async () => {
//     const token = localStorage.getItem('access_token');
//     if (!token) {
//       console.error("No access token found");
//       return;
//     }
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/user/cart/", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setCartItems(response.data.cart_items || []);
//     } catch (error) {
//       console.error("Failed to fetch cart items:", error);
//     }
//   };

//   // Function to add an item to the cart
//   const addToCart = async (productId, quantity = 1) => {
//     const token = localStorage.getItem('access_token');
//     if (!token) {
//       alert("Please log in to add items to your cart.");
//       navigate("/login"); // Redirect to login page
//       return;
//     }
//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/user/cart/add/",
//         {
//           product_id: productId,
//           quantity: quantity,
//           user_id: accessToken.user_id // Pass user_id from access token
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(response.data);
//       alert("Item added to cart");
//       fetchCart(); // Refresh the cart after adding
//     } catch (error) {
//       if (error.response?.status === 401) {
//         alert("Your session has expired. Please log in again.");
//         localStorage.removeItem("access_token");
//         navigate("/login"); // Redirect to login page
//       } else {
//         console.error("Error adding to cart:", error);
//         alert("There was an error adding the item to the cart.");
//       }
//     }
//   };

//   // Function to update cart item quantity
//   const updateCartItem = async (cartItemId, quantity) => {
//     const token = localStorage.getItem('access_token');
//     if (!token) {
//       alert("Please log in to update your cart.");
//       navigate("/login"); // Redirect to login page
//       return;
//     }
//     try {
//       await axios.put(
//         `http://127.0.0.1:8000/user/cart/update/${cartItemId}/`,
//         {
//           quantity,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       fetchCart(); // Refresh the cart after updating
//     } catch (error) {
//       console.error("Failed to update cart item:", error);
//     }
//   };

//   // Function to remove an item from the cart
//   const removeFromCart = async (cartItemId) => {
//     const token = localStorage.getItem('access_token');
//     if (!token) {
//       alert("Please log in to remove items from your cart.");
//       navigate("/login"); // Redirect to login page
//       return;
//     }
//     try {
//       await axios.delete(
//         `http://127.0.0.1:8000/user/cart/remove/${cartItemId}/`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       fetchCart(); // Refresh the cart after removal
//     } catch (error) {
//       console.error("Failed to remove item from cart:", error);
//     }
//   };

//   // Function to clear the cart
//   const clearCart = async () => {
//     const token = localStorage.getItem('access_token');
//     if (!token) {
//       alert("Please log in to clear your cart.");
//       navigate("/login"); // Redirect to login page
//       return;
//     }
//     try {
//       await axios.delete("http://127.0.0.1:8000/user/cart/clear/", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setCartItems([]); // Clear the cart state
//     } catch (error) {
//       console.error("Failed to clear cart:", error);
//     }
//   };

//   // Fetch cart items on component mount
//   useEffect(() => {
//     fetchCart();
//   }, []);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         updateCartItem,
//         removeFromCart,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

// Provide context
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { user, accessToken } = useContext(AuthContext);
  const navigate = useNavigate();

  // Fetch cart items
  const fetchCart = async () => {
    if (!user) {
      console.error('User is not logged in');
      return;
    }

    const token = localStorage.getItem('access_token');
    if (!token) {
      console.error('No access token found');
      return;
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/user/cart/',
        {
          user_id: user.user_id
        }
      );
      setCartItems(response.data.cart_items || []);
    } catch (error) {
      console.error('Error fetching cart items:', error.response?.data || error);
    }
  };

  // Add an item to the cart
  const addToCart = async (productId, quantity,selectedSize) => {
    if (!user) {
      alert('Please log in to add items to your cart.');
      navigate('/login');
      return;
    }

    const token = localStorage.getItem('access_token');
    if (!token) {
      alert('Please log in to add items to your cart.');
      navigate('/login');
      console.error('No access token found');
      return;
    }
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/user/cart/add/',
        {
          product_id: productId,
          quantity: quantity,
          user_id: user.user_id,
          size: selectedSize,
        }
      );
      fetchCart(); // Refresh the cart after adding
      alert('Item added to cart');
      navigate('/my-account');
    } catch (error) {
      console.error('Error adding to cart:', error.response?.data || error);
    }
  };

  // Update cart item quantity
  const updateCartItem = async (cartItemId, quantity) => {
    if (!user) {
      alert('Please log in to update your cart.');
      navigate('/login');
      return;
    }

    const token = localStorage.getItem('access_token');
    if (!token) {
      alert('Please log in to update your cart.');
      navigate('/login');
      console.error('No access token found');
      return;
    }

    try {
      await axios.put(
        `http://127.0.0.1:8000/user/cart/update/${cartItemId}/`,
        { quantity }
      );
      fetchCart(); // Refresh the cart after updating
    } catch (error) {
      console.error('Error updating cart item:', error.response?.data || error);
    }
  };

  // Remove item from the cart
  const removeFromCart = async (cartItemId) => {
    if (!user) {
      alert('Please log in to remove items from your cart.');
      navigate('/login');
      return;
    }

    const token = localStorage.getItem('access_token');
    if (!token) {
      alert('Please log in to remove items from your cart.');
      navigate('/login');
      console.error('No access token found');
      return;
    }

    try {
      await axios.delete(
        `http://127.0.0.1:8000/user/cart/remove/${cartItemId}/`
      );
      fetchCart(); // Refresh the cart after removal
    } catch (error) {
      console.error('Error removing item from cart:', error.response?.data || error);
    }
  };

  // Clear the cart
  const clearCart = async () => {
    if (!user) {
      alert('Please log in to clear your cart.');
      navigate('/login');
      return;
    }

    const token = localStorage.getItem('access_token');
    if (!token) {
      alert('Please log in to clear your cart.');
      navigate('/login');
      console.error('No access token found');
      return;
    }

    try {
      await axios.delete(
        'http://127.0.0.1:8000/user/cart/clear/'
      ,
      {data : {
        user_id: user.user_id,
      }}
    );
      setCartItems([]); // Clear the cart state
    } catch (error) {
      console.error('Error clearing cart:', error.response?.data || error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user]);

  return (
    <CartContext.Provider
      value={{
        fetchCart,
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
