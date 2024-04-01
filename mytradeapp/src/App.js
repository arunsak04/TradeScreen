 // App.js

import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TradeListing from './components/TradeListing';
import CreateTrade from './components/CreateTrade';
import CreateOrder from './components/CreateOrder';
import OrderListing from './components/OrderListing';
import TradeScreen from './components/TradeScreen';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
 

function App() {
  const currentYear = new Date().getFullYear();
  const companyName = "Arun Kumar";

  return (
    <> 
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Routes>
      {/* // http://localhost:3000 */}
        <Route path='/' element={ <TradeScreen/>}></Route>


        
        <Route path='/tradeListing' element={<TradeListing/>}></Route>

        <Route path='/addTrade' element={<CreateTrade/>}></Route>

        {/* http://localhost:3000/editTrades/{id}   */}
        <Route path='/editTrade/:id' element={<CreateTrade/>}></Route>

        <Route path='/orderTrade' element={<CreateOrder/>}></Route>

        <Route path='/orderListing' element={<OrderListing/>}></Route>
    </Routes>

<Footer companyName={companyName} currentYear={currentYear} /> 
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
