import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerService from "../../service/CustomerService";

const ViewCustomer = () => {

  useEffect(() => {
    
}, []);
 let navigate = useNavigate();

 const products = [
    { name: "Soda", description: "2 Liter bottle", price: 3.25, quantity: 1, discount: 0.50},
    { name: "Breadsticks", description: "8 per pack", price: 2.50, quantity: 1,  discount: 0},
    { name: "Pizza - Small Pepporoni", description: "8 inch", price: 7.35, quantity: 1 ,  discount: 0 },
    { name: "Pizza - Medium Pepporoni", description: "12 inch", price: 9.35, quantity: 1,  discount: 0},
    { name: "Pizza - Large Pepporoni", description: "18 inch", price: 14.00, quantity: 1,  discount: 0 },
    { name: "Pizza - Small House Special", description: "8 inch", price: 8.50, quantity: 1,  discount: 0 },
    { name: "Pizza - Medium House Special", description: "12 inch", price: 10.50, quantity: 1,  discount: 0},
    { name: "Pizza - Large House Special", description: "18 inch", price: 16.00, quantity: 1,  discount: 0 },
  ];
  let handleViewHome = () =>{
    navigate({pathname: "/"})

  }
  let handleViewCustomerOrder = () =>{
    navigate({pathname: "/viewcustomerorder"})

  }
  let handleAddOrderDetail = () =>{
    navigate({pathname: "/addorderdetail"})

  }

  const originalTotalPrice = products.reduce((total, product) => {
    const productPriceWithoutDiscount = product.price * product.quantity;
    return total + productPriceWithoutDiscount;
  }, 0);
  const allowanceAvailable = 20;
  const newTotalPrice = Math.max(
    0,
    products.reduce((total, product) => {
      const productPriceWithDiscount = (product.price - product.discount) * product.quantity;
      return total + productPriceWithDiscount;
    }, 0) - allowanceAvailable
  );
  const remainingAllowance = Math.max(0, allowanceAvailable - newTotalPrice);

  return (
        <>
        <h2>Product Table</h2>
          <table className="table table-striped text-center">
            <thead className="bg-success">
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Discount</th>
              </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                <tr key={index}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.discount}%</td>
                <td>
                    {/* Add any buttons or actions related to each product here */}
                </td>
                </tr>
            ))}
            </tbody>
          </table>
          <div>
            <p>Allowance Available: ${allowanceAvailable}</p>
        </div>
      <div>
        <p>Price Without Discount: ${originalTotalPrice.toFixed(2)}</p>
      </div>
      <div>
        <p>Price Charged: ${newTotalPrice.toFixed(2)}</p>
      </div>
        <div>
        <p>Remaining Allowance: ${remainingAllowance.toFixed(2)}</p>
      </div>
      <button className="btn btn-success form-control" onClick={handleAddOrderDetail}>Complete Order Detail</button>
      <button className="btn btn-warning form-control" onClick={handleViewCustomerOrder}>Back</button>
          <button className="btn btn-danger form-control" onClick={handleViewHome}>Exit</button>
        </>
      );      
};

export default ViewCustomer;