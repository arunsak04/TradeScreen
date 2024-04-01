import React, { useEffect, useState } from 'react';
import { listOrders } from '../Services/OrderServices';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderListing = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = () => {
        listOrders()
            .then(response => {
                console.log(response.data);
                setOrders(response.data);
                setLoading(false);
                setError(null);
            })
            .catch(error => {
                setLoading(false);
                setError('Error fetching orders. Please try again.');
            });
    };

    return (
        <>
            <div className='container'>
                <h2 className='text-center'>List of Confirmed Orders</h2>
                {loading && <p>Loading orders...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && (
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Stock Name</th>
                                <th>Quantity</th>
                                <th>Price Per Unit</th>
                                <th>Type</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td>{order.stockName}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.pricePerUnit}</td>
                                    <td>{order.type}</td>
                                    <td>Confirmed</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default OrderListing;
