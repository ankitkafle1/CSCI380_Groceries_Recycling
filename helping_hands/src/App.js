import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/header_footer/Header';
import AddCustomer from './components/customers/AddCustomer';
import Customers from './components/customers/Customers';
function App() {
  const API_URL = 'http://localhost:4500/users';
  const [CustomersInfo,setCustomers] = useState([]);
  const [Cswitch, setSwitch]= useState('on')
  useEffect(() => {
    const fetchItems = async() => {
        const response = await fetch(API_URL);
        const customersList = await response.json();
        setCustomers(customersList)
    }
    fetchItems();
    }, [Cswitch])
  return(
    <div>
        <Header/>
        <Customers 
        CustomersInfo ={CustomersInfo}
        setCustomers = {setCustomers}
        Cswitch ={Cswitch}
        setSwitch ={setSwitch}
        />
        <AddCustomer 
        CustomersInfo ={CustomersInfo}
        setCustomers = {setCustomers}
        Cswitch ={Cswitch}
        setSwitch ={setSwitch}
         />
    </div>
    )
}
export default App;
