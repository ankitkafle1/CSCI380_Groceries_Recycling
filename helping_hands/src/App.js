import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/header_footer/Header';
import AddCustomer from './components/customers/AddCustomer';
import Customers from './components/customers/Customers';


function App() {
  const API_URL = 'http://localhost:4500/api/customers';
  const [CustomersInfo,setCustomers] = useState([]);

  useEffect(() => {
    const fetchItems = async() => {
        const response = await fetch(API_URL);
        const customersList = await response.json();
        setCustomers(customersList)
    }
    fetchItems();
    }, [])

/*
//A function to add items in a database
    const addItems = async (item) => {
      const id = 10
      const myNewItem = {'name':"i am a disco dancer"};
      const listItem = [...CustomersInfo,myNewItem];
      setCustomers(listItem)
      const postOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(myNewItem)
      }
      const result = await apiRequest(API_URL, postOptions);
    }
    */
  return(
    <div>
        <Header/>
        <Customers CustomersInfo ={CustomersInfo}/>
        <AddCustomer 
        CustomersInfo={CustomersInfo}
        //addItems={addItems}
        />
    </div>
    )
}
export default App;