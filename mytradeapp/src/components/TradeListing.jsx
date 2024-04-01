import React, { useEffect, useState } from 'react';
import { listTrades, deleteTrade,} from '../Services/TradeServices';
import { useNavigate } from 'react-router-dom';

const TradeListing = () => {
    const [trades, setTrades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchTrades();
    }, []);

    const fetchTrades = () => {
        listTrades()
            .then(response => {
                console.log(response.data);
                setTrades(response.data);
                setLoading(false);
                setError(null);
            })
            .catch(error => {
                setLoading(false);
                setError('Error fetching trades. Please try again.');
            });
    };

    
    function addNewTrade() {
        navigate('/addTrade');
    }

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this trade?')) {
            deleteTrade(id)
                .then(() => {
                    // Remove the deleted trade from the list of trades
                    setTrades(trades.filter(trade => trade.id !== id));
                })
                .catch(error => {
                    setError('Error deleting trade. Please try again.');
                });
        }
    };

    const handleUpdate = (id) => {
        // Implement your update logic here
         
            navigate(`/editTrade/${id}`)
        
        console.log('Update trade with id:', id);
    };

       return (
        <>
        <div className='container'>
            <h2 className='text-center'>List of Trades</h2>
            <button className='btn btn-dark mb-2' onClick={addNewTrade}>Add Trade</button>
            {loading && <p>Loading trades...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
            <table className='table table-striped table-borderd'>
                <thead>
                    <tr>
                        <th>Stock Name</th>
                        <th>Listing Price</th>
                        <th>Quantity</th>
                        <th>Type</th>
                        <th>Price Per Unit</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {trades.map(trade => (
                        <tr key={trade.id}>
                            <td>{trade.stockName}</td>
                            <td>{trade.listingPrice}</td>
                            <td>{trade.quantity}</td>
                            <td>{trade.type}</td>
                            <td>{trade.pricePerUnit}</td>
                            <td>
                                { <button className='btn btn-info' onClick={() => handleUpdate(trade.id)}>Update</button> }
                                { <button className='btn btn-danger' onClick={() => handleDelete(trade.id)} style={{ marginLeft: '10px' }}>Delete</button> }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            )}
        </div>
        </>
    );
};

export default TradeListing;
