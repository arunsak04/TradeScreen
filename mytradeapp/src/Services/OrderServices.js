import axios from  "axios"

const REST_API_BASE_URL='http://localhost:8080/api/orders';

 

export const listOrders=()=> axios.get(REST_API_BASE_URL)

export const createOrder=(order)=>axios.post(REST_API_BASE_URL,order);

export const getOrder=(orderid)=> axios.get(REST_API_BASE_URL+'/'+orderid);

export const updateOrder=(orderid, order)=>axios.put(REST_API_BASE_URL+'/'+orderid,order);

export const deleteOrder=(orderid)=>axios.delete(REST_API_BASE_URL+'/'+orderid);