import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderDetailService from "../../service/OrderDetailService";
import { BigDecimal } from 'bigdecimal';

const ViewOrderDetail = () => {
  const [state, setState] = useState({
    orderDetails: [],
    filteredOrderDetails: [],
    searchEmployeeID: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    OrderDetailService.getAllOrderDetails()
      .then((response) => {
        if (response && Array.isArray(response) && response.length > 0) {
          setState({
            orderDetails: response,
            filteredOrderDetails: response,
          });
        } else {
          console.warn("Response data is either undefined or an empty array.");
        }
      })
      .catch((error) => {
        console.error("Error fetching customer orders:", error);
      });
  }, []);

  const navigate = useNavigate();

  const handleAddOrderDetail = () => {
    navigate({ pathname: "/addorderdetail" });
  };

  const handleViewHome = () => {
    navigate({ pathname: "/" });
  };

  const handleViewCustomer = () => {
    navigate({ pathname: "/viewcustomers" });
  };

  const handleSearch = () => {
    const { orderDetails, searchEmployeeID, startDate, endDate } = state;

    const filteredOrderDetails = orderDetails.filter((orderDetail) =>
      orderDetail.customerOrder.employee_id.includes(searchEmployeeID) &&
      new Date(orderDetail.date) >= new Date(startDate) &&
      new Date(orderDetail.date) <= new Date(endDate)
    );

    setState((prevState) => ({
      ...prevState,
      filteredOrderDetails,
    }));
  };

  return (
    <>
      <h2>Order Details</h2>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Search Employee ID"
          value={state.searchEmployeeID}
          onChange={(e) =>
            setState((prevState) => ({ ...prevState, searchEmployeeID: e.target.value }))
          }
        />
        <input
          type="date"
          placeholder="Start Date"
          value={state.startDate}
          onChange={(e) =>
            setState((prevState) => ({ ...prevState, startDate: e.target.value }))
          }
        />
        <input
          type="date"
          placeholder="End Date"
          value={state.endDate}
          onChange={(e) =>
            setState((prevState) => ({ ...prevState, endDate: e.target.value }))
          }
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <table className="table table-striped text-center">
        <thead className="bg-success">
          <tr>
            <th>OrderDetail ID</th>
            <th>Date</th>
            <th>Zipcode</th>
            <th>Order ID</th>
            <th>Product ID</th>
            <th>Price Charged</th>
            <th>Historic Price</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {state.filteredOrderDetails.length > 0 ? (
            state.filteredOrderDetails.map((orderDetail, i) => (
              <tr key={orderDetail.order_detail_id}>
                <td>{orderDetail.order_detail_id}</td>
                <td>{new Date(orderDetail.date).toISOString().split('T')[0]}</td>
                <td>{orderDetail.zipcode}</td>
                <td>{orderDetail.customerOrder.order_id}</td>
                <td>{orderDetail.product.product_id}</td>
                <td>${orderDetail.priceCharged ? orderDetail.priceCharged : "N/A"}</td>
                <td>${orderDetail.historicPrice ? orderDetail.historicPrice: "N/A"}</td>
                <td>{orderDetail.employee.employee_id}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No order details available</td>
            </tr>
          )}
        </tbody>
      </table>
      <button className="btn btn-danger form-control" onClick={handleViewHome}>
        Exit
      </button>
    </>
  );
};

export default ViewOrderDetail;

