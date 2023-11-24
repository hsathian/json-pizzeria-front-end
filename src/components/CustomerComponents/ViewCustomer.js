import React, { useEffect, useState } from "react";
import UserService from "../../service/UserService";

const ViewCustomer = () => {
  const [state, setState] = useState({
    customers: [],
  });

  useEffect(() => {
        UserService.getAllCustomers()
    .then((response) => {
        console.log("Full response:", response);

        if (response.data && Object.keys(response.data).length > 0) {
        console.log("Response data:", response.data);
        setState({
            customers: [response.data], // Wrap the object in an array if needed
        });
        } else {
        console.warn("Response data is either undefined or an empty object.");
        }
    })
    .catch((error) => {
        console.error("Error fetching customers:", error);
    });
  }, []);

  return (
        <>
          <table className="table table-striped text-center">
            <thead className="bg-success">
              <tr>
                <th>Phone Number</th>
                <th>Zipcode</th>
                <th>City</th>
                <th>State</th>
                <th>Street Address</th>
              </tr>
            </thead>
            <tbody>
              {state.customers.length > 0 ? (
                state.customers.map((customer, i) => (
                  <tr key={customer.phone_number}>
                    <td>{customer.phone_number}</td>
                    <td>{customer.zipcode}</td>
                    <td>{customer.city}</td>
                    <td>{customer.state}</td>
                    <td>{customer.street_address}</td>
                    <td>
                      <button className="btn btn-warning">Update</button>
                      <button className="btn btn-info">Delete</button>
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
        </>
      );      
};

export default ViewCustomer;
