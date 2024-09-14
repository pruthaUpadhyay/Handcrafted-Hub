import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const MyAccount = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div>
            <h2>My Cart</h2>
            {cartItems.length > 0 ? (
                cartItems.map(item => (
                    <div key={item._id}>
                        <h4>{item.product.name}</h4>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: {item.product.price}</p>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default MyAccount;
