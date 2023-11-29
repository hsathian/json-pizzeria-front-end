import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderDetailService from "../../service/OrderDetailService";
import { BigDecimal } from 'bigdecimal';


const AddOrderDetail = () => {
    const navigate = useNavigate();
    const [zipcode, setZipcode] = useState("");
    const [order_id, setOrderID] = useState("");
    const [product_id, setProductID] = useState("");
    const [priceCharged, setPriceCharged] = useState("");
    const [historicPrice, setHistoricPrice] = useState("");
    const [employee_id, setEmployeeID] = useState("");
    
    const handleZipcode = (e) => setZipcode(e.target.value);
    const handleOrderID = (e) => setOrderID(e.target.value);
    const handleProductID = (e) => setProductID(e.target.value);
    const handlePriceCharged = (e) => {
        const value = parseFloat(e.target.value);
        setPriceCharged(isNaN(value) ? "" : value.toFixed(2));
    };
    
    const handleHistoricPrice = (e) => {
        const value = parseFloat(e.target.value);
        setHistoricPrice(isNaN(value) ? "" : value.toFixed(2));
    };
    
    const handleEmployeeID = (e) => setEmployeeID(e.target.value);

    let handleViewProducts = () =>{
        navigate({pathname: "/viewproducts"})
      }

      const handleSubmit = (e) => {
        e.preventDefault();
    
        const orderDetail = {
            zipcode: zipcode,
            customerOrder: {
                order_id: order_id,
            },
            product: {
                product_id: product_id,
            },
            priceCharged: priceCharged,
            historicPrice: historicPrice,
            employee: {
                employee_id: employee_id,
            },
        };
    
        OrderDetailService.addOrderDetail(orderDetail)
            .then(() => {
                alert("Order Detail has been added successfully!");
                navigate({ pathname: '/vieworderdetail' });
            })
            .catch(() => {
                alert("Order Detail creation failed");
            });
    };
    

    return (
        <>
            <h2>Add Order Detail Information</h2>
        <form onSubmit={handleSubmit}>
    <label>
        Zipcode: <input onChange={handleZipcode} type="text" value={zipcode} className="form-control"/>
        Order ID: <input onChange={handleOrderID} type="text" value={order_id} className="form-control"/>
        Product ID: <input onChange={handleProductID} type="text" value={product_id} className="form-control"/>
        Price Charged $: <input onChange={handlePriceCharged} type="number" step = "0.01" value={priceCharged} className="form-control"/>
        Historic Price $: <input onChange={handleHistoricPrice} type="number" step="0.01" value={historicPrice} className="form-control"/>
        Employee ID: <input onChange={handleEmployeeID} type="text" value={employee_id} className="form-control"/>

        <input type="submit" value="Submit" className="form-control bg-warning"/>
        <button className="btn btn-danger form-control" onClick={handleViewProducts}>Exit</button>
    </label>
</form>
    </>
    );
};

export default AddOrderDetail;
