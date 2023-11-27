import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import ViewCustomer from './components/CustomerComponents/ViewCustomer';
import AddCustomer from './components/CustomerComponents/AddCustomer';
import UpdateCustomer from './components/CustomerComponents/UpdateCustomer';
import DeleteCustomer from './components/CustomerComponents/DeleteCustomer';

import HomePage from './components/HomePage';
import ViewEmployee from './components/EmployeeComponents/ViewEmployee';
import AddEmployee from './components/EmployeeComponents/AddEmployee';
import UpdateEmployee from './components/EmployeeComponents/UpdateEmployee';
import DeleteEmployee from './components/EmployeeComponents/DeleteEmployee';
import Admin from './components/Admin';
import ViewProducts from './components/ProductComponent/ViewProducts.js'
import AddCustomerOrder from './components/CustomerOrderComponent/AddCustomerOrder';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path = {"/"} element = {<HomePage/>} exact={true}/>
      {/* Admin Routes*/}
      <Route path = {"/admin"} element = {<Admin/>} exact={true}/>
      {/* Customer Table Routes*/}
      <Route path = {"/viewcustomers"} element = {<ViewCustomer/>} exact={true}/>
      <Route path = {"/addcustomer"} element = {<AddCustomer/>} exact={true}/>
      <Route path = {"/updatecustomer"} element = {<UpdateCustomer/>} exact={true}/>
      <Route path = {"/deletecustomer"} element = {<DeleteCustomer/>} exact={true}/>
      {/* Customer Order Table Routes*/}
      {/* Employee Table Routes*/}
      <Route path = {"/viewemployees"} element = {<ViewEmployee/>} exact={true}/>
      <Route path = {"/addemployees"} element = {<AddEmployee/>} exact={true}/>
      <Route path = {"/updateemployees"} element = {<UpdateEmployee/>} exact={true}/> 
      <Route path = {"/deleteemployees"} element = {<DeleteEmployee/>} exact={true}/> 
    
      {/* Product Table Routes*/}
      <Route path = {"/viewproducts"} element = {<ViewProducts/>} exact={true}/> 
      {/* Customer Order Routes*/}
      <Route path = {"/createorder"} element = {<AddCustomerOrder/>} exact={true}/> 
      {/* Order Detail Table Routes*/}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
