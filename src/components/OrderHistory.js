import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        const response = await axios.get('http://localhost:8000/api/orders');
        setOrders(response.data);
    };

    return (
        <div className="container">
            <h1>Order History</h1>
            {orders.length > 0 ? (
                orders.map((order) => (
                    <div key={order.id} className="card mb-3">
                        <div className="card-body">
                            <h5>Order ID: {order.id}</h5>
                            <p>Total Price: ${order.total_price}</p>
                            <p>Order Date: {new Date(order.created_at).toLocaleString()}</p>
                            <ul>
                                {order.items.map((item) => (
                                    <li key={item.id}>
                                        {item.book.name} - Quantity: {item.quantity} - Price: ${item.price}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default OrderHistory;
