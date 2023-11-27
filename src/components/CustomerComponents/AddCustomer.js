
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerService from "../../service/CustomerService";

let AddCustomer = () =>{
    let navigate = useNavigate();

    let [phone_number, setPhone_Number] = useState('');
    let [street_address, setStreet_Address] = useState('');
    let [city, setCity] = useState('');
    let [state, set_State] = useState('');
    let [zipcode, setZipcode] = useState('');

    let handlePhone_Number = (e) => { setPhone_Number(e.target.value)}
    let handleStreet_Address = (e) => { setStreet_Address(e.target.value)}
    let handleCity = (e) => { setCity(e.target.value)}
    let handle_State= (e) => { set_State(e.target.value)}
    let handleZipcode = (e) => { setZipcode(e.target.value)}
    let handleViewHome = () =>{
        navigate({pathname: "/"})
    
      }

    let isValidZipcode = () => {
        // Add your logic to check if the zipcode is allowed
        const allowedZipcodes = ["55501", "55502", "55503", "55504"];
        return allowedZipcodes.includes(zipcode);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidZipcode()) {
            alert("Invalid Zipcode. Only zipcodes 55501, 55502, 55503, and 55504 are allowed.");
            return;
        }

        let customer = {phone_number: phone_number, street_address: street_address, city: city, state: state, zipcode:zipcode}
        //alert(JSON.stringify(customer))

        CustomerService.addCustomer(customer).then(() =>{
            alert("Customer has been added successfully!")
            navigate({pathname : '/viewcustomers'});
        }, () => {
            alert("Customer creation failed")
        });
    }
    return(
<>
<h2>Add Customer Information</h2>
<form onSubmit={handleSubmit}>
    <label>
        Phone Number: <input onChange={handlePhone_Number} type="text" value={phone_number} className="form-control"/>
        Street Address: <input onChange={handleStreet_Address} type="text" value={street_address} className="form-control"/>
        City: <input onChange={handleCity} type="text" value={city} className="form-control"/>
        State: <input onChange={handle_State} type="text" value={state} className="form-control"/>
        Zipcode: <input onChange={handleZipcode} type="text" value={zipcode} className="form-control"/>

        <input type="submit" value="Submit" className="form-control bg-warning"/>
        <button className="btn btn-danger form-control" onClick={handleViewHome}>Exit</button>
    </label>
</form>
</>

    );
}
export default AddCustomer;