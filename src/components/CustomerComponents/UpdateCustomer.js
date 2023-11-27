import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomerService from "../../service/CustomerService";

let UpdateCustomer = () => {
  let location = useLocation();
  let navigate = useNavigate();

  let [customerTemp, setCustomer] = useState({
    phone_number: "",
    street_address: "",
    city: "",
    state: "",
    zipcode: "",
  });

  useEffect(() => {
    CustomerService.getAllCustomers().then((response) => {
      const customer = response.find(
        (customer) => customer.phone_number === location.state.phone_number
      );
      setCustomer(customer);
    });
  }, [location.state.phone_number]);

  let [street_address, setStreet_Address] = useState("");
  let [city, setCity] = useState("");
  let [state, set_State] = useState("");
  let [zipcode, setZipcode] = useState("");

  // States to track whether each field has been modified
  let [isStreetAddressModified, setIsStreetAddressModified] = useState(false);
  let [isCityModified, setIsCityModified] = useState(false);
  let [isStateModified, setIsStateModified] = useState(false);
  let [isZipcodeModified, setIsZipcodeModified] = useState(false);

  let handleStreet_Address = (e) => {
    setStreet_Address(e.target.value);
    setIsStreetAddressModified(true);
  };
  let handleViewCustomer = () =>{
    navigate({pathname: "/viewcustomers"})

  };
  let handleCity = (e) => {
    setCity(e.target.value);
    setIsCityModified(true);
  };
  let handle_State = (e) => {
    set_State(e.target.value);
    setIsStateModified(true);
  };
  let handleZipcode = (e) => {
    setZipcode(e.target.value);
    setIsZipcodeModified(true);
  };
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
    let updatedCustomer = {
      phone_number: location.state.phone_number,
      street_address: isStreetAddressModified ? street_address : customerTemp.street_address,
      city: isCityModified ? city : customerTemp.city,
      state: isStateModified ? state : customerTemp.state,
      zipcode: isZipcodeModified ? zipcode : customerTemp.zipcode,
    };

    CustomerService.updateCustomer(
      location.state.phone_number,
      updatedCustomer
    ).then(
      () => {
        alert("Customer has been updated successfully!");
        navigate({ pathname: "/viewcustomers" });
      },
      () => {
        alert("Customer update failed");
      }
    );
  };

  return (
    <>
    <h2>Update Customer Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Phone Number:{" "}
          <input
            type="text"
            value={customerTemp.phone_number}
            className="form-control"
            disabled
          />
          Street Address:{" "}
          <input
            onChange={handleStreet_Address}
            type="text"
            value={street_address}
            className="form-control"
            placeholder={customerTemp.street_address}
          />
          City:{" "}
          <input
            onChange={handleCity}
            type="text"
            value={city}
            className="form-control"
            placeholder={customerTemp.city}
          />
          State:{" "}
          <input
            onChange={handle_State}
            type="text"
            value={state}
            className="form-control"
            placeholder={customerTemp.state}
          />
          Zipcode:{" "}
          <input
            onChange={handleZipcode}
            type="text"
            value={zipcode}
            className="form-control"
            placeholder={customerTemp.zipcode}
          />

          <input
            type="submit"
            value="Submit"
            className="form-control bg-warning"
          />
          
        </label>
      </form>
      <button
  onClick={handleViewCustomer}
  className="form-control bg-danger"
  style={{
    width: "200px",
    marginTop: "10px",
    padding: "8px", // Adjust the padding to match the styling of the "Submit" button
    border: "1px solid #ccc", // Optional: Add border for consistency
    borderRadius: "4px", // Optional: Add border-radius for consistency
    cursor: "pointer", // Optional: Add cursor pointer for better user experience
  }}
>
  Exit
</button>

    </>
  );
};

export default UpdateCustomer;

