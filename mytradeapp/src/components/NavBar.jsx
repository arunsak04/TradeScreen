import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container">
        <Link className="navbar-brand" to="/">TradeScreen</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/addTrade">Create Trade</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orderTrade">Create Order</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tradeListing">Trade Listing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orderListing">Order Listing</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
