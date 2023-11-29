import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerService from "../../service/CustomerService";

const ViewCustomer = () => {
  const [state, setState] = useState({
    customers: [],
  });

  useEffect(() => {
    CustomerService.getAllCustomers()
      .then((response) => {
        console.log("Full response:", response);

        // Check if response.data is defined and is an array with length greater than 0
        if (response && Array.isArray(response) && response.length > 0) {
          console.log("Response data:", response);
          setState({
            customers: response
          });
        } else {
          console.warn("Response data is either undefined or an empty array.");
        }
      })
      .catch((error) => {
        console.error("Error fetching customers:", error);
      });
}, []);

  let navigate = useNavigate();

  let handleAddCustomer = () =>{
    navigate({pathname: "/addcustomer"})

  }
  let handleUpdateCustomer = (phone_number) =>{
    navigate("/updatecustomer", {state : {phone_number}});
  }
  // let handleDelete = (phone_number) =>{
    
  // }
  let handleViewHome = () =>{
    navigate({pathname: "/"})

  }
  let handleCustomerOrder = () =>{
    navigate({pathname: "/createcustomerorder"})

  }

  return (
        <>
        <h2>Customer Table</h2>
          <table className="table table-striped text-center">
            <thead className="bg-success">
              <tr>
                <th>Phone Number</th>
                <th>Street Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zipcode</th>
              </tr>
            </thead>
            <tbody>
              {state.customers.length > 0 ? (
                state.customers.map((customer, i) => (
                  <tr key={customer.phone_number}>
                    <td>{customer.phone_number}</td>
                    <td>{customer.street_address}</td>
                    <td>{customer.city}</td>
                    <td>{customer.state}</td>
                    <td>{customer.zipcode}</td>
                    <td>
                      <button className="btn btn-warning" onClick={()=>{handleUpdateCustomer(customer.phone_number)}}>Update</button>
                      <button className="btn btn-info" onClick={handleCustomerOrder}>New Order</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No customers available</td>
                </tr>
              )}
            </tbody>
          </table>
          <button className="btn btn-success form-control" onClick={handleAddCustomer}>Add Customer</button>
          <button className="btn btn-danger form-control" onClick={handleViewHome}>Exit</button>
        </>
      );      
};

export default ViewCustomer;
