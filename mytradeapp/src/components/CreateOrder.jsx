import React, { useState, useEffect } from 'react';
import { createOrder } from '../Services/OrderServices';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CreateTrade.css';

const CreateOrder = () => {
    const [stockName, setStockName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [pricePerUnit, setPricePerUnit] = useState('');
    const [type, setType] = useState('');
    const { tradeId } = useParams();

    // Fetch trade details when component mounts
    useEffect(() => {
        // Fetch trade details by tradeId and set the stockName
        // Example:
        // fetchTradeDetails(tradeId)
        //     .then((trade) => {
        //         setStockName(trade.stockName);
        //     })
        //     .catch((error) => {
        //         console.error('Error fetching trade details:', error);
        //     });
    }, [tradeId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = { stockName, quantity, pricePerUnit, type };

        createOrder(tradeId, order)
            .then((response) => {
                console.log(response.data);
                // Redirect or handle success accordingly
            })
            .catch((error) => {
                console.error(error);
                // Handle error accordingly
            });
    };

    return (
        <div className="trade-container">
            <div className="trade-form">
                <h1 className="trade-title">Create Order</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="stockName">Stock Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="stockName"
                            value={stockName}
                            onChange={(e) => setStockName(e.target.value)}
                            readOnly // Stock name should not be editable
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            type="number"
                            className="form-control"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pricePerUnit">Price Per Unit</label>
                        <input
                            type="number"
                            className="form-control"
                            id="pricePerUnit"
                            value={pricePerUnit}
                            onChange={(e) => setPricePerUnit(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type (Buy/Sell)</label>
                        <input
                            type="text"
                            className="form-control"
                            id="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateOrder;
