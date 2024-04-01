 

import React, { useEffect, useState } from 'react';
import { createTrade, updateTrade } from '../Services/TradeServices';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CreateTrade.css'; // Import custom CSS for additional styling

const CreateTrade = () => {
    const [stockName, setStockName] = useState('');
    const [listingPrice, setListingPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [type, setType] = useState('');
    const [pricePerUnit, setPricePerUnit] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // Fetch trade details if editing an existing trade
        if (id) {
            // Implement fetching trade details by ID
        }
    }, [id]);

    const saveOrUpdateTrade = (e) => {
        e.preventDefault();
        const trade = { stockName, listingPrice, quantity, type, pricePerUnit };

        if (id) {
            // Update existing trade
            updateTrade(id, trade)
                .then((response) => {
                    console.log(response.data);
                    navigate('/tradeListring');
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            // Create new trade
            createTrade(trade)
                .then((response) => {
                    console.log(response.data);
                    navigate('/tradeListing');
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
      <div className="trade-container">
      <div className="trade-form">
          <h1 className="trade-title">{id ? 'Update Trade' : 'Create Trade'}</h1>
          <form onSubmit={saveOrUpdateTrade}>
              <div className="form-group">
                  <label htmlFor="stock_name">Stock Name</label>
                  <input
                      type="text"
                      className="form-control"
                      name="stock_name"
                      id="stock_name"
                      placeholder="Enter stock name"
                      value={stockName}
                      onChange={(e) => setStockName(e.target.value)}
                      required
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                      type="number"
                      className="form-control"
                      name="quantity"
                      id="quantity"
                      placeholder="Enter quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="listing_price">Listing Price</label>
                  <input
                      type="number"
                      className="form-control"
                      name="listing_price"
                      id="listing_price"
                      placeholder="Enter listing price"
                      value={listingPrice}
                      onChange={(e) => setListingPrice(e.target.value)}
                      required
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="type">Type(Buy/Sell)</label>
                  <input
                      type="text"
                      className="form-control"
                      name="type"
                      id="type"
                      placeholder="Enter type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      required
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="price_per_unit">Price Per Unit</label>
                  <input
                      type="number"
                      className="form-control"
                      name="price_per_unit"
                      id="price_per_unit"
                      placeholder="Price Per Unit"
                      value={pricePerUnit}
                      onChange={(e) => setPricePerUnit(e.target.value)}
                      required
                  />
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-block">
                  {id ? 'Update' : 'Submit'}
              </button>
          </form>
      </div>
  </div>
    );
};

export default CreateTrade;

