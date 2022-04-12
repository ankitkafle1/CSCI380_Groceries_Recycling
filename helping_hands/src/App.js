import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header_footer/Header';
import AddCustomer from './components/customers/AddCustomer';
import Customers from './components/customers/Customers';
import Footer from './components/header_footer/Footer';
import Nav from './components/header_footer/Nav';
import Home from './components/customers/Home';

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
        <Nav/>
        <Routes>
          <Route exact path="/" element ={
            <Home/>
          }>
          </Route>
          <Route exact path="/makewish" element ={
            <AddCustomer 
            CustomersInfo ={CustomersInfo}
            setCustomers = {setCustomers}
            Cswitch ={Cswitch}
            setSwitch ={setSwitch}
            />
          }>
          </Route>

          <Route exact path="/customer" element ={
            <Customers 
            CustomersInfo ={CustomersInfo}
            setCustomers = {setCustomers}
            Cswitch ={Cswitch}
            setSwitch ={setSwitch}
            />
          }></Route>

        </Routes>
        <Footer/>
    </div>
    )
}
export default App;
