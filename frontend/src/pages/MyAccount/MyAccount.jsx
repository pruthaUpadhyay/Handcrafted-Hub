// import React, { useContext, useEffect, useState } from "react";
// import { CartContext } from "../../Context/CartContext";
// import { AuthContext } from "../../Context/AuthContext";
// import { FaUserCircle } from "react-icons/fa";
// import axios from "axios";
// import { AiOutlineHeart } from "react-icons/ai";

// import {jwtDecode,InvalidTokenError} from 'jwt-decode';
// const MyAccount = () => {
//   const { fetchCart, cartItems, removeFromCart } = useContext(CartContext);
//   const { user, accessToken } = useContext(AuthContext);
//   const [userData, setUserData] = useState(null);

// const getUserDataFromToken = (token) => {
//   try {
//     const decoded = jwtDecode(token);
//     return decoded.user_id; // Assuming the user ID is stored in the token
//   } catch (error) {
//     console.error('Error decoding token:', error);
//     return null;
//   }
// };


//   useEffect(() => {
    
//     const fetchUserDetails = async () => {
//         const userId = getUserDataFromToken(accessToken); // Decode the token to get user ID
  
//         if (userId) {
//           try {
//             const response = await axios.get(`http://127.0.0.1:8000/api/users/user-details/?user_id=${userId}`, {
//               headers: {
//                 'Authorization': `Bearer ${accessToken}`
//               }
//             });
//             setUserData(response.data);
//           } catch (error) {
//             console.error('Error fetching user details:', error);
//           }
//         }
//       };
  
//       fetchUserDetails();
//     }, [accessToken]);

//   return (
//     <div className="container mx-auto px-4 py-6 max-w-4xl">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         {/* User Information */}
//         <div className="flex items-center mb-6">
//           <FaUserCircle className="text-5xl text-gray-600 mr-4" />
//           <div>
//             <h2 className="text-2xl font-bold">{userData?.username || "Loading..."}</h2>
//             <p className="text-gray-500">{userData?.email || "Loading..."}</p>
//           </div>
//         </div>

//         {/* Cart Section */}
//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-4">My Cart</h3>
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <div key={item._id} className="flex items-center justify-between border-b py-4">
//                 <div className="flex items-center">
//                   <div className="mr-4">
//                     <h4 className="text-lg font-semibold">{item.product_name}</h4>
//                     <p className="text-gray-500">Size: {item.size}</p>
//                   </div>
//                   <div>
//                     <p className="text-lg font-medium">Quantity: {item.quantity}</p>
//                     <p className="text-lg font-medium">Price: ₹{item.price}</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => {removeFromCart(item.product_id
//                   )
//                     console.log(item.product_id
//                     )
//                   }}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">Your cart is empty.</p>
//           )}
//         </div>

//         {/* Wishlist Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">My Wishlist</h3>
//           {/* Replace this placeholder with actual wishlist data */}
//           <div className="flex items-center">
//             <AiOutlineHeart className="text-2xl text-gray-600 mr-4" />
//             <p className="text-gray-500">Your wishlist is empty.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyAccount;
// import React, { useContext, useEffect, useState } from "react";
// import { CartContext } from "../../Context/CartContext";
// import { AuthContext } from "../../Context/AuthContext";
// import { FaUserCircle } from "react-icons/fa";
// import axios from "axios";
// import { AiOutlineHeart } from "react-icons/ai";
// import {jwtDecode,InvalidTokenError} from "jwt-decode";
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBTable,
//   MDBTableBody,
//   MDBTableHead,
//   MDBBtn,
//   MDBInput,
//   MDBIcon,
//   MDBCard,
//   MDBCardBody,
// } from "mdb-react-ui-kit";

// const MyAccount = () => {
//   const { fetchCart, cartItems, removeFromCart, updateCartItem } = useContext(CartContext);
//   const { user, accessToken } = useContext(AuthContext);
//   const [userData, setUserData] = useState(null);
//   const [total, setTotal] = useState(0);

//   const getUserDataFromToken = (token) => {
//     try {
//       const decoded = jwtDecode(token);
//       return decoded.user_id; // Assuming the user ID is stored in the token
//     } catch (error) {
//       console.error("Error decoding token:", error);
//       return null;
//     }
//   };
//   const calculateTotal = () => {
//     let total = 0;
//     cartItems.forEach(item => {
//       // Clean the price by removing commas and converting it to a float
//       const cleanedPrice = parseFloat(item.price.replace(/,/g, ''));
//       const quantity = parseInt(item.quantity, 10); // Ensure quantity is an integer
  
//       if (!isNaN(cleanedPrice) && !isNaN(quantity)) {
//         total += cleanedPrice * quantity; // Multiply cleaned price by quantity for each item
//       }
//     });
//     return total;
//   };
  
  
  

//   useEffect(() => {
//     const calculatedTotal = calculateTotal();
//     setTotal(calculatedTotal);
//   }, [cartItems]); 

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const userId = getUserDataFromToken(accessToken); // Decode the token to get user ID
//       if (userId) {
//         try {
//           const response = await axios.get(
//             `http://127.0.0.1:8000/api/users/user-details/?user_id=${userId}`,
//             {
//               headers: {
//                 Authorization: `Bearer ${accessToken}`,
//               }
//             }
//           );
//           setUserData(response.data);
//         } catch (error) {
//           console.error("Error fetching user details:", error);
//         }
//       }
//     };

//     fetchUserDetails();
//   }, [accessToken]);

//   // Calculate the total price for the cart

//   return (
//     <section className="h-100 h-custom">
//       <MDBContainer className="py-5 h-100">
//         <div className="bg-white shadow-md rounded-lg p-6 mb-5">
//           {/* User Information */}
//           <div className="flex items-center mb-6">
//             <FaUserCircle className="text-5xl text-gray-600 mr-4" />
//             <div>
//               <h2 className="text-2xl font-bold">
//                 {userData?.username || "Loading..."}
//               </h2>
//               <p className="text-gray-500">{userData?.email || "Loading..."}</p>
//             </div>
//           </div>
//         </div>

//         <MDBRow className="justify-content-center align-items-center h-100">
//           <MDBCol>
//             <MDBTable responsive>
//               <MDBTableHead>
//                 <tr>
//                   <th scope="col" className="h5">
//                     Shopping Bag
//                   </th>
//                   <th scope="col">Format</th>
//                   <th scope="col">Quantity</th>
//                   <th scope="col">Price</th>
//                   <th scope="col">Actions</th>
//                 </tr>
//               </MDBTableHead>
//               <MDBTableBody>
//                 {cartItems.map((item) => (
//                   <tr key={item._id}>
//                     <th scope="row">
//                       <div className="d-flex align-items-center">
                        
//                         <div className="flex-column ms-4">
//                           <p className="mb-2">{item.product_name}</p>
//                           <p className="mb-0">{item.product_description}</p>
//                         </div>
//                       </div>
//                     </th>
//                     <td className="align-middle">
//                       <p className="mb-0" style={{ fontWeight: "500" }}>
//                         {item.size}
//                       </p>
//                     </td>
//                     <td className="align-middle">
//                       <div className="d-flex flex-row align-items-center">
//                         <MDBBtn
//                           className="px-2"
//                           color="link"
//                           onClick={() => updateCartItem(item._id, item.quantity - 1)}
//                           disabled={item.quantity === 1}
//                         >
//                           <MDBIcon fas icon="minus" />
//                         </MDBBtn>

//                         <MDBInput
//                           min={1}
//                           type="number"
//                           size="sm"
//                           style={{ width: "50px" }}
//                           value={item.quantity}
//                           readOnly
//                         />

//                         <MDBBtn
//                           className="px-2"
//                           color="link"
//                           onClick={() => updateCartItem(item._id, item.quantity + 1)}
//                         >
//                           <MDBIcon fas icon="plus" />
//                         </MDBBtn>
//                       </div>
//                     </td>
//                     <td className="align-middle">
//                       <p className="mb-0" style={{ fontWeight: "500" }}>
//                         ₹{item.price}
//                       </p>
//                     </td>
//                     <td className="align-middle">
                        
//                       <MDBBtn color="danger" onClick={() => removeFromCart(item.product_id)}>
//                         Remove
//                       </MDBBtn>
//                     </td>
//                   </tr>
//                 ))}
//               </MDBTableBody>
//             </MDBTable>
//           </MDBCol>

//           <MDBCard className="shadow-2-strong mb-5 mb-lg-0" style={{ borderRadius: "16px" }}>
//             <MDBCardBody className="p-4">
//               <MDBRow>
//                 <MDBCol lg="4" xl="3">
//                   <div className="d-flex justify-content-between" style={{ fontWeight: "500" }}>
//                     <p className="mb-2">Subtotal</p>
//                     <p className="mb-2">₹{total.toFixed(2)}</p>
//                   </div>

//                   <div className="d-flex justify-content-between" style={{ fontWeight: "500" }}>
//                     <p className="mb-0">Shipping</p>
//                     <p className="mb-0">₹2.99</p>
//                   </div>

//                   <hr className="my-4" />

//                   <div className="d-flex justify-content-between mb-4" style={{ fontWeight: "500" }}>
//                     <p className="mb-2">Total (tax included)</p>
//                     <p className="mb-2">₹{(total + 2.99).toFixed(2)}</p>
//                   </div>

//                   <MDBBtn block size="lg">
//                     <div className="d-flex justify-content-between">
//                       <span>Checkout</span>
//                       <span>₹{(total + 2.99).toFixed(2)}</span>
//                     </div>
//                   </MDBBtn>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//   );
// };

// export default MyAccount;
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { AuthContext } from "../../Context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { AiOutlineHeart } from "react-icons/ai";
import { jwtDecode } from "jwt-decode";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
  MDBInput,
  MDBIcon,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import "./MyAccount.css"; // Create this file for additional custom styles
import { WishlistContext } from "../../Context/WishlistContext";


const MyAccount = () => {
  const { fetchCart, cartItems, removeFromCart, updateCartItem } = useContext(CartContext);
  const { user, accessToken } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [total, setTotal] = useState(0);
  const { wishlistItems, fetchWishlist, removeFromWishlist } = useContext(WishlistContext);

  const getUserDataFromToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded.user_id; // Assuming the user ID is stored in the token
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const cleanedPrice = parseFloat(item.price.replace(/,/g, ""));
      const quantity = parseInt(item.quantity, 10);
      if (!isNaN(cleanedPrice) && !isNaN(quantity)) {
        total += cleanedPrice * quantity;
      }
    });
    return total;
  };

  useEffect(() => {
    fetchWishlist(); // Fetch wishlist items on component mount
  }, []);
  useEffect(() => {
    const calculatedTotal = calculateTotal();
    setTotal(calculatedTotal);
  }, [cartItems]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userId = getUserDataFromToken(accessToken);
      if (userId) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/users/user-details/?user_id=${userId}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      }
    };
    fetchUserDetails();
  }, [accessToken]);

  return (
    <section className="h-100 h-custom">
      <MDBContainer className="py-5 h-100">
        {/* User Info */}
        <div className="user-info bg-light rounded-lg p-4 mb-5 text-center">
          <FaUserCircle className="text-5xl text-gray-600 mb-3" />
          <h2 className="text-2xl font-bold">{userData?.username || "Loading..."}</h2>
          <p className="text-gray-500">{userData?.email || "Loading..."}</p>
        </div>

        {/* Cart Table */}
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol lg="8">
            <MDBTable responsive className="cart-table">
              <MDBTableHead className="bg-light">
                <tr>
                  <th scope="col" className="h5">Product</th>
                  <th scope="col">Size</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Actions</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {cartItems.map((item) => (
                  <tr key={item._id}>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <div className="product-img-wrapper">
                          {/* Optional: Add product image here */}
                        </div>
                        <div className="flex-column ms-3">
                          <p className="mb-2 font-bold">{item.product_name}</p>
                          <p className="mb-0 text-muted">{item.product_description}</p>
                        </div>
                      </div>
                    </th>
                    <td className="align-middle">
                      <p className="mb-0">{item.size || "N/A"}</p>
                    </td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <MDBBtn
                          size="sm"
                          className="px-2"
                          color="link"
                          onClick={() => updateCartItem(item._id, item.quantity - 1)}
                          disabled={item.quantity === 1}
                        >
                          <MDBIcon fas icon="minus" />
                        </MDBBtn>
                        <MDBInput min={1} type="number" size="sm" value={item.quantity} readOnly />
                        <MDBBtn
                          size="sm"
                          className="px-2"
                          color="link"
                          onClick={() => updateCartItem(item._id, item.quantity + 1)}
                        >
                          <MDBIcon fas icon="plus" />
                        </MDBBtn>
                      </div>
                    </td>
                    <td className="align-middle">₹{item.price}</td>
                    <td className="align-middle">
                      <MDBBtn color="danger" onClick={() => removeFromCart(item.product_id)}>
                        Remove
                      </MDBBtn>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
            {/* Wishlist Section */}
        <MDBRow className="justify-content-center align-items-center mt-5">
          <MDBCol lg="8">
            <MDBTable responsive className="wishlist-table">
              <MDBTableHead className="bg-light">
                <tr>
                  <th scope="col" className="h5">Product</th>
                  <th scope="col">Actions</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {wishlistItems.length > 0 ? (
                  wishlistItems.map((item) => (
                    <tr key={item.product_id}>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <div className="product-img-wrapper">
                            {/* Optional: Add product image here */}
                          </div>
                          <div className="flex-column ms-3">
                            <p className="mb-2 font-bold">{item.product_name}</p>
                            <p className="mb-0 text-muted">{item.product_description}</p>
                          </div>
                        </div>
                      </th>
                      <td className="align-middle">
                        <MDBBtn color="danger" onClick={() => removeFromWishlist(item.product_id)}>
                          Remove
                        </MDBBtn>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center">Your wishlist is empty.</td>
                  </tr>
                )}
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
        </MDBRow>
          </MDBCol>
                

          {/* Checkout Section */}
          <MDBCol lg="4" className="mt-4 mt-lg-0">
            <MDBCard className="checkout-card shadow-2-strong mb-4">
              <MDBCardBody className="p-4">
                <h5 className="mb-3">Summary</h5>
                <div className="d-flex justify-content-between mb-3">
                  <p className="mb-0">Subtotal</p>
                  <p className="mb-0">₹{total.toFixed(2)}</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <p className="mb-0">Shipping</p>
                  <p className="mb-0">₹2.99</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <h6 className="mb-0">Total</h6>
                  <h6 className="mb-0">₹{(total + 2.99).toFixed(2)}</h6>
                </div>
                <MDBBtn block size="lg" color="dark">
                  Checkout
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

        </MDBRow>
        
      </MDBContainer>
    </section>
  );
};

export default MyAccount;
