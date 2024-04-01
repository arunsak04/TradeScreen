import React from 'react';
import { Link } from 'react-router-dom';
import tradeScreen from '../images/tradeScreen.jpg'
import '../styles/TradeScreen.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const TradeScreen = () => {
    return (
        <div className="container">
        <div className="card trading-card">
            <img src={tradeScreen} alt="Trade Screen" className="img-fluid" />
            <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <div className="card trading-content">
                    <h2 className="card-title text-center mb-4">Trade Options</h2>
                    <div className="d-flex justify-content-around">
                        <Link to="/addTrade" className="btn  trading-btn">
                            Create Trade
                        </Link>
                        <Link to="/orderTrade" className="btn   trading-btn">
                            Order Trade
                        </Link>
                        <Link to="/tradeListing" className="btn  trading-btn">
                            Trade Listing
                        </Link>
                        <Link to="/orderListing" className="btn trading-btn">
                            Order Listing
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default TradeScreen;
