import axios from  "axios"

const REST_API_BASE_URL='http://localhost:8080/api/trades';

export const tradeScreen=() => axios.get(REST_API_BASE_URL);

export const listTrades=()=> axios.get(REST_API_BASE_URL)

export const createTrade=(trade)=>axios.post(REST_API_BASE_URL,trade);

export const getTrade=(tradeid)=> axios.get(REST_API_BASE_URL+'/'+tradeid);

export const updateTrade=(tradeid, trade)=>axios.put(REST_API_BASE_URL+'/'+tradeid,trade);

export const deleteTrade=(tradeid)=>axios.delete(REST_API_BASE_URL+'/'+tradeid);