import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import ViewCustomer from './components/CustomerComponents/ViewCustomer';
import AddCustomer from './components/CustomerComponents/AddCustomer';
import UpdateCustomer from './components/CustomerComponents/UpdateCustomer';
import DeleteCustomer from './components/CustomerComponents/DeleteCustomer';
import Header from './components/Header';

function App() {
  return (
    <>
    <h1> Customer </h1>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path = {"/"} element = {<ViewCustomer/>} exact={true}/>
      <Route path = {"/viewcustomers"} element = {<ViewCustomer/>} exact={true}/>
      <Route path = {"/addcustomer"} element = {<AddCustomer/>} exact={true}/>
      <Route path = {"/updatecustomer"} element = {<UpdateCustomer/>} exact={true}/>
      <Route path = {"/deletecustomer"} element = {<DeleteCustomer/>} exact={true}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
