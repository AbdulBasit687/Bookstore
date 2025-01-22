import React, { useState } from 'react';
import API from '../api/api';
import './Cart.css'; // Importing the CSS for styling

function Cart() {
    const [cart, setCart] = useState([
        { name: 'The Great Gatsby', price: 10.99, quantity: 2 },
        { name: '1984', price: 14.99, quantity: 1 },
    ]); // Dummy cart data for testing

    // Place order using the API instance
    const handlePlaceOrder = () => {
        API.post('/orders', { items: cart })
            .then((response) => {
                alert('Order placed successfully');
                console.log('Order Response:', response.data); // Log server response
                setCart([]); // Clear cart after placing the order
            })
            .catch((err) => {
                console.error('Error placing order:', err.response || err.message);
                alert('Failed to place the order. Please try again.');
            });
    };

    // Calculate the total price of the cart
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Your Cart</h1>
            {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {cart.map((item, index) => (
                            <li className="cart-item" key={index}>
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>
                                        ${item.price.toFixed(2)} x {item.quantity}
                                    </p>
                                </div>
                                <p className="item-total">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <h2>Total: ${calculateTotal()}</h2>
                        <button
                            className="place-order-button"
                            onClick={handlePlaceOrder}
                        >
                            Place Order
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
