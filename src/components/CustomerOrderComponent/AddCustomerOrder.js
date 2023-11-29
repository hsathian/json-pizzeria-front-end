import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerOrderService from "../../service/CustomerOrderService";

const AddCustomerOrder = () => {
    const navigate = useNavigate();
    const [phone_number, setPhoneNumber] = useState("");
    const [employee_id, setEmployeeID] = useState("");
    
    const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
    const handleEmployeeID = (e) => setEmployeeID(e.target.value);
    let handleViewCustomer = () =>{
        navigate({pathname: "/viewcustomers"})
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        const customerOrder = {
            customer: {
                phone_number: phone_number,
            },
            employee: {
                employee_id: employee_id,
            },
        };

        CustomerOrderService.addCustomerOrder(customerOrder)
            .then(() => {
                alert("Customer Order has been added successfully!");
                navigate({pathname : '/viewcustomerorder'});
            })
            .catch(() => {
                alert("Customer Order creation failed");
            });
    };

    return (
        <>
            <h2>Add Customer Order Information</h2>
<       form onSubmit={handleSubmit}>
    <label>
        Phone Number: <input onChange={handlePhoneNumber} type="text" value={phone_number} className="form-control"/>
        Employee ID: <input onChange={handleEmployeeID} type="text" value={employee_id} className="form-control"/>

        <input type="submit" value="Submit" className="form-control bg-warning"/>
        <button className="btn btn-danger form-control" onClick={handleViewCustomer}>Exit</button>
    </label>
</form>
    </>
    );
};

export default AddCustomerOrder;
