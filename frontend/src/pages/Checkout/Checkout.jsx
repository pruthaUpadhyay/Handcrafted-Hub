import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CheckoutPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [shippingAddress, setShippingAddress] = useState('');
    const [total, setTotal] = useState(0);
    const history = useNavigate();

    useEffect(() => {
        // Fetch cart items when the component mounts
        const fetchCartItems = async () => {
            try {
                const response = await axios.post('/api/cart', { user_id: localStorage.getItem('user_id') });
                const items = response.data.cart_items;
                setCartItems(items);
                const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
                setTotal(totalAmount);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const handleCheckout = async () => {
        try {
            const userId = localStorage.getItem('user_id');
            await axios.post('/api/checkout', { user_id: userId, shipping_address: shippingAddress, total });
            history.push('/order-confirmation');  // Redirect to order confirmation page
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <div>
            <h1>Checkout</h1>
            <h2>Review Your Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.product_id}>
                        {item.product_name} - {item.quantity} x ${item.price} (Size: {item.size})
                    </li>
                ))}
            </ul>
            <h3>Total: ${total.toFixed(2)}</h3>
            <div>
                <label>
                    Shipping Address:
                    <textarea
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button onClick={handleCheckout}>Place Order</button>
        </div>
    );
};

export default CheckoutPage;
