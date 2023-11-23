import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import ViewUser from './components/ViewUser';
import AddCustomer from './components/AddCustomer';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteCustomer';
import Header from './components/Header';

function App() {
  return (
    <>
    <h1> Customer </h1>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path = {"/"} element = {<ViewUser/>} exact={true}/>
      <Route path = {"/viewusers"} element = {<ViewUser/>} exact={true}/>
      <Route path = {"/addcustomer"} element = {<AddCustomer/>} exact={true}/>
      <Route path = {"/updateuser"} element = {<UpdateUser/>} exact={true}/>
      <Route path = {"/deleteuser"} element = {<DeleteUser/>} exact={true}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
