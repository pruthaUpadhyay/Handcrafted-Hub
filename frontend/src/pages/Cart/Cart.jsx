  // import React from "react";
  // import {
  //   MDBBtn,
  //   MDBCard,
  //   MDBCardBody,
  //   MDBCol,
  //   MDBContainer,
  //   MDBIcon,
  //   MDBInput,
  //   MDBRadio,
  //   MDBRow,
  //   MDBTable,
  //   MDBTableBody,
  //   MDBTableHead,
  // } from "mdb-react-ui-kit";
  // import './Cart.css'

  // export default function SummaryPage() {
  //   return (
  //     <section className="h-100 h-custom">
  //       <MDBContainer className="py-5 h-100">
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
  //                 </tr>
  //               </MDBTableHead>
  //               <MDBTableBody>
  //                 <tr>
  //                   <th scope="row">
  //                     <div className="d-flex align-items-center">
  //                       <img
  //                         src="https://i.imgur.com/2DsA49b.webp"
  //                         fluid
  //                         className="rounded-3"
  //                         style={{ width: "120px" }}
  //                         alt="Book"
  //                       />
  //                       <div className="flex-column ms-4">
  //                         <p className="mb-2">Thinking, Fast and Slow</p>
  //                         <p className="mb-0">Daniel Kahneman</p>
  //                       </div>
  //                     </div>
  //                   </th>
  //                   <td className="align-middle">
  //                     <p className="mb-0" style={{ fontWeight: "500" }}>
  //                       Digital
  //                     </p>
  //                   </td>
  //                   <td className="align-middle">
  //                     <div class="d-flex flex-row align-items-center">
  //                       <MDBBtn className="px-2" color="link">
  //                         <MDBIcon fas icon="minus" />
  //                       </MDBBtn>

  //                       <MDBInput
  //                         min={0}
  //                         type="number"
  //                         size="sm"
  //                         style={{ width: "50px" }}
  //                         defaultValue={2}
  //                       />

  //                       <MDBBtn className="px-2" color="link">
  //                         <MDBIcon fas icon="plus" />
  //                       </MDBBtn>
  //                     </div>
  //                   </td>
  //                   <td className="align-middle">
  //                     <p className="mb-0" style={{ fontWeight: "500" }}>
  //                       $9.99
  //                     </p>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <th scope="row">
  //                     <div className="d-flex align-items-center">
  //                       <img
  //                         src="https://i.imgur.com/Oj1iQUX.webp"
  //                         fluid
  //                         className="rounded-3"
  //                         style={{ width: "120px" }}
  //                         alt="Book"
  //                       />
  //                       <div className="flex-column ms-4">
  //                         <p className="mb-2">
  //                           Homo Deus: A Brief History of Tomorrow
  //                         </p>
  //                         <p className="mb-0">Yuval Noah Harari</p>
  //                       </div>
  //                     </div>
  //                   </th>
  //                   <td className="align-middle">
  //                     <p className="mb-0" style={{ fontWeight: "500" }}>
  //                       Paperback
  //                     </p>
  //                   </td>
  //                   <td className="align-middle">
  //                     <div class="d-flex flex-row align-items-center">
  //                       <MDBBtn className="px-2" color="link">
  //                         <MDBIcon fas icon="minus" />
  //                       </MDBBtn>

  //                       <MDBInput
  //                         min={0}
  //                         type="number"
  //                         size="sm"
  //                         style={{ width: "50px" }}
  //                         defaultValue={1}
  //                       />

  //                       <MDBBtn className="px-2" color="link">
  //                         <MDBIcon fas icon="plus" />
  //                       </MDBBtn>
  //                     </div>
  //                   </td>
  //                   <td className="align-middle">
  //                     <p className="mb-0" style={{ fontWeight: "500" }}>
  //                       $13.50
  //                     </p>
  //                   </td>
  //                 </tr>
  //               </MDBTableBody>
  //             </MDBTable>
  //           </MDBCol>
  //           <MDBCard
  //             className="shadow-2-strong mb-5 mb-lg-0"
  //             style={{ borderRadius: "16px" }}
  //           >
  //             <MDBCardBody className="p-4">
  //               <MDBRow>
  //                 <MDBCol md="6" lg="4" xl="3" className="mb-4 mb-md-0">
  //                   <form>
  //                     <div className="d-flex flex-row pb-3">
  //                       <div className="d-flex align-items-center pe-2">
  //                         <MDBRadio
  //                           type="radio"
  //                           name="radio1"
  //                           checked
  //                           value=""
  //                           aria-label="..."
  //                         />
  //                       </div>
  //                       <div className="rounded border w-100 p-3">
  //                         <p className="d-flex align-items-center mb-0">
  //                           <MDBIcon
  //                             fab
  //                             icon="cc-mastercard fa-2x text-dark pe-2"
  //                           />
  //                           Credit Card
  //                         </p>
  //                       </div>
  //                     </div>
  //                     <div className="d-flex flex-row pb-3">
  //                       <div className="d-flex align-items-center pe-2">
  //                         <MDBRadio
  //                           type="radio"
  //                           name="radio1"
  //                           checked
  //                           value=""
  //                           aria-label="..."
  //                         />
  //                       </div>
  //                       <div className="rounded border w-100 p-3">
  //                         <p className="d-flex align-items-center mb-0">
  //                           <MDBIcon fab icon="cc-visa fa-2x text-dark pe-2" />
  //                           Debit Card
  //                         </p>
  //                       </div>
  //                     </div>
  //                     <div className="d-flex flex-row pb-3">
  //                       <div className="d-flex align-items-center pe-2">
  //                         <MDBRadio
  //                           type="radio"
  //                           name="radio1"
  //                           checked
  //                           value=""
  //                           aria-label="..."
  //                         />
  //                       </div>
  //                       <div className="rounded border w-100 p-3">
  //                         <p className="d-flex align-items-center mb-0">
  //                           <MDBIcon fab icon="cc-paypal fa-2x text-dark pe-2" />
  //                           PayPal
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </form>
  //                 </MDBCol>
  //                 <MDBCol md="6" lg="4" xl="6">
  //                   <MDBRow>
  //                     <MDBCol size="12" xl="6">
  //                       <MDBInput
  //                         className="mb-4 mb-xl-5"
  //                         label="Name on card"
  //                         placeholder="John Smiths"
  //                         size="lg"
  //                       />
  //                       <MDBInput
  //                         className="mb-4 mb-xl-5"
  //                         label="Expiration"
  //                         placeholder="MM/YY"
  //                         size="lg"
  //                         maxLength={7}
  //                         minLength={7}
  //                       />
  //                     </MDBCol>

  //                     <MDBCol size="12" xl="6">
  //                       <MDBInput
  //                         className="mb-4 mb-xl-5"
  //                         label="Card Number"
  //                         placeholder="1111 2222 3333 4444"
  //                         size="lg"
  //                         minlength="19"
  //                         maxlength="19"
  //                       />
  //                       <MDBInput
  //                         className="mb-4 mb-xl-5"
  //                         label="Cvv"
  //                         placeholder="&#9679;&#9679;&#9679;"
  //                         size="lg"
  //                         minlength="3"
  //                         maxlength="3"
  //                         type="password"
  //                       />
  //                     </MDBCol>
  //                   </MDBRow>
  //                 </MDBCol>
  //                 <MDBCol lg="4" xl="3">
  //                   <div
  //                     className="d-flex justify-content-between"
  //                     style={{ fontWeight: "500" }}
  //                   >
  //                     <p className="mb-2">Subtotal</p>
  //                     <p className="mb-2">$23.49</p>
  //                   </div>

  //                   <div
  //                     className="d-flex justify-content-between"
  //                     style={{ fontWeight: "500" }}
  //                   >
  //                     <p className="mb-0">Shipping</p>
  //                     <p className="mb-0">$2.99</p>
  //                   </div>

  //                   <hr className="my-4" />

  //                   <div
  //                     className="d-flex justify-content-between mb-4"
  //                     style={{ fontWeight: "500" }}
  //                   >
  //                     <p className="mb-2">Total (tax included)</p>
  //                     <p className="mb-2">$26.48</p>
  //                   </div>

  //                   <MDBBtn block size="lg">
  //                     <div className="d-flex justify-content-between">
  //                       <span>Checkout</span>
  //                       <span>$26.48</span>
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
  // }
  import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import axios from "axios";
import './Cart.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/cart/');
        setCartItems(response.data);

        const totalPrice = response.data.reduce(
          (sum, item) => sum + item.quantity * item.product.price,
          0
        );
        setTotal(totalPrice);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const updateCartItemQuantity = async (itemId, newQuantity) => {
    try {
      await axios.put('http://127.0.0.1:8000/cart/update/', { item_id: itemId, quantity: newQuantity });
      setCartItems(cartItems.map((item) =>
        item._id === itemId ? { ...item, quantity: newQuantity } : item
      ));

      const updatedTotal = cartItems.reduce(
        (sum, item) => sum + item.quantity * item.product.price,
        0
      );
      setTotal(updatedTotal);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const removeCartItem = async (itemId) => {
    try {
      await axios.delete('http://127.0.0.1:8000/cart/remove/', { data: { item_id: itemId } });
      setCartItems(cartItems.filter((item) => item._id !== itemId));

      const updatedTotal = cartItems.reduce(
        (sum, item) => sum + item.quantity * item.product.price,
        0
      );
      setTotal(updatedTotal);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <section className="h-100 h-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                    Shopping Bag
                  </th>
                  <th scope="col">Format</th>
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
                        <img
                          src={item.product.image_url}
                          fluid
                          className="rounded-3"
                          style={{ width: "120px" }}
                          alt={item.product.name}
                        />
                        <div className="flex-column ms-4">
                          <p className="mb-2">{item.product.name}</p>
                          <p className="mb-0">{item.product.description}</p>
                        </div>
                      </div>
                    </th>
                    <td className="align-middle">
                      <p className="mb-0" style={{ fontWeight: "500" }}>
                        {item.product.format}
                      </p>
                    </td>
                    <td className="align-middle">
                      <div className="d-flex flex-row align-items-center">
                        <MDBBtn
                          className="px-2"
                          color="link"
                          onClick={() =>
                            updateCartItemQuantity(item._id, item.quantity - 1)
                          }
                          disabled={item.quantity === 1}
                        >
                          <MDBIcon fas icon="minus" />
                        </MDBBtn>

                        <MDBInput
                          min={1}
                          type="number"
                          size="sm"
                          style={{ width: "50px" }}
                          value={item.quantity}
                          readOnly
                        />
  
                        <MDBBtn
                          className="px-2"
                          color="link"
                          onClick={() =>
                            updateCartItemQuantity(item._id, item.quantity + 1)
                          }
                        >
                          <MDBIcon fas icon="plus" />
                        </MDBBtn>
                      </div>
                    </td>
                    <td className="align-middle">
                      <p className="mb-0" style={{ fontWeight: "500" }}>
                        ${item.product.price}
                      </p>
                    </td>
                    <td className="align-middle">
                      <MDBBtn
                        color="danger"
                        onClick={() => removeCartItem(item._id)}
                      >
                        Remove
                      </MDBBtn>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </MDBCol>

          <MDBCard className="shadow-2-strong mb-5 mb-lg-0" style={{ borderRadius: "16px" }}>
            <MDBCardBody className="p-4">
              <MDBRow>
                <MDBCol lg="4" xl="3">
                  <div className="d-flex justify-content-between" style={{ fontWeight: "500" }}>
                    <p className="mb-2">Subtotal</p>
                    <p className="mb-2">${total.toFixed(2)}</p>
                  </div>

                  <div className="d-flex justify-content-between" style={{ fontWeight: "500" }}>
                    <p className="mb-0">Shipping</p>
                    <p className="mb-0">$2.99</p>
                  </div>

                  <hr className="my-4" />

                  <div className="d-flex justify-content-between mb-4" style={{ fontWeight: "500" }}>
                    <p className="mb-2">Total (tax included)</p>
                    <p className="mb-2">${(total + 2.99).toFixed(2)}</p>
                  </div>

                  <MDBBtn block size="lg">
                    <div className="d-flex justify-content-between">
                      <span>Checkout</span>
                      <span>${(total + 2.99).toFixed(2)}</span>
                    </div>
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}