import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerOrderService from "../../service/CustomerOrderService";

const ViewCustomerOrder = () => {
  const [state, setState] = useState({
    customerOrders: [],
  });

  useEffect(() => {
    CustomerOrderService.getAllCustomerOrder()
      .then((response) => {
        console.log("Full response:", response);

        // Check if response.data is defined and is an array with length greater than 0
        if (response && Array.isArray(response) && response.length > 0) {
          console.log("Response data:", response);
          setState({
            customerOrders: response
          });
        } else {
          console.warn("Response data is either undefined or an empty array.");
        }
      })
      .catch((error) => {
        console.error("Error fetching customer orders:", error);
      });
}, []);

  let navigate = useNavigate();

  let handleAddCustomerOrder = () =>{
    navigate({pathname: "/addcustomerorder"})
  }
  let handleCalculateOrderPrice = () => {
    navigate({pathname: "/viewProducts"})
  }
  let handleViewHome = () =>{
    navigate({pathname: "/"})
  }

  let handleViewCustomer = () => {
    navigate({pathname: "/viewcustomers"})
  }

  return (
    <>
    <h2>Customer Order Table</h2>
      <table className="table table-striped text-center">
        <thead className="bg-success">
          <tr>
            <th>Order ID</th>
            <th>Telephone Number</th>
            <th>Employee ID</th>
            {/* <th>Employee Password</th> */}
          </tr>
        </thead>
        <tbody>
          {state.customerOrders.length > 0 ? (
            state.customerOrders.map((customerOrder, i) => (
                <tr key={customerOrder.order_id}>
                <td>{customerOrder.order_id}</td>
                <td>{customerOrder.customer.phone_number}</td>
                <td>{customerOrder.employee.employee_id}</td>
                
                  {/* <button className="btn btn-warning" onClick={()=>{handleUpdateEmployee(employee.employee_id)}}>Update</button>
                  <button className="btn btn-danger" onClick={()=>{handleDeleteEmployee(employee.employee_id)}}>Delete</button> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No employees available</td>
            </tr>
          )}
        </tbody>
      </table>
      {/* <button className="btn btn-success form-control" onClick={handleAddCustomerOrder}>Add CustomerOrder</button> */}
      <button className="btn btn-success form-control" onClick={handleCalculateOrderPrice}>Calculate Order Price</button>
      <button className="btn btn-info form-control" onClick={handleViewCustomer}>Create Another Order</button>
      <button className="btn btn-danger form-control" onClick={handleViewHome}>Exit</button>
    </>
  );       
};

export default ViewCustomerOrder;
