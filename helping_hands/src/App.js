import React from 'react';

import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/header_footer/Header';
import AddCustomer from './components/customers/AddCustomer';
import Customers from './components/customers/Customers';
import Footer from './components/header_footer/Footer';
import Nav from './components/header_footer/Nav';
import Home from './components/customers/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {Button} from "react-bootstrap";
import { UserAuthContextProvider, useUserAuth, sigSignOut } from './components/UserAuth';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await sigSignOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

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
    <>
        <Nav/>
        <UserAuthContextProvider>
        <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleLogout}>
                    Log out
                </Button>
            </div>
        <Routes>
          <Route exact path="/" element ={
            <Home/>
          }>
          </Route>

          <Route exact path="/about" element ={
            <ProtectedRoute>
            </ProtectedRoute>
          }>
          </Route>

          <Route exact path="/post" element ={
            <ProtectedRoute>
            </ProtectedRoute>
          }>
          </Route>

          <Route exact path="/makewish" element ={
            <ProtectedRoute>
              <AddCustomer 
              CustomersInfo ={CustomersInfo}
              setCustomers = {setCustomers}
              Cswitch ={Cswitch}
              setSwitch ={setSwitch}
              />
            </ProtectedRoute>
          }>
          </Route>

          <Route exact path="/customer" element ={
            <ProtectedRoute>
              <Customers 
              CustomersInfo ={CustomersInfo}
              setCustomers = {setCustomers}
              Cswitch ={Cswitch}
              setSwitch ={setSwitch}
              />
            </ProtectedRoute>
          }></Route>
          <Route exact path="/login" element ={
            <Login />
          }></Route>
          <Route exact path="/signup" element ={
            <Signup />
          }></Route>

        </Routes>
        </UserAuthContextProvider>
        <Footer/>
    </>
    )
}
export default App;
