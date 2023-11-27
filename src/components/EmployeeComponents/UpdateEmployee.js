import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EmployeeService from "../../service/EmployeeService";

let UpdateEmployee = () => {
  let location = useLocation();
  let navigate = useNavigate();

  let [employeeTemp, setEmployee] = useState({
    employee_id: "",
    username: "",
  });

  useEffect(() => {
    EmployeeService.getAllEmployees().then((response) => {
      const employee = response.find(
        (employee) => employee.employee_id === location.state.employee_id
      );
      setEmployee(employee);
    });
  }, [location.state.employee_id]);

  let [username, setUsername] = useState("");

  // States to track whether each field has been modified
  let [isUsernameModified, setIsUsernameModified] = useState(false);

  let handleUsername = (e) => {
    setUsername(e.target.value);
    setIsUsernameModified(true);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let updatedEmployee = {
      employee_id: location.state.employee_id,
      username: isUsernameModified ? username : employeeTemp.username,
    };

    EmployeeService.updateEmployee(
      location.state.employee_id,
      updatedEmployee
    ).then(
      () => {
        alert("Employee has been updated successfully!");
        navigate({ pathname: "/viewemployees" });
      },
      () => {
        alert("Employee update failed");
      }
    );
  };

  return (
    <>
    <h2>Update Customer Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Employee ID:{" "}
          <input
            type="text"
            value={employeeTemp.employee_id}
            className="form-control"
            disabled
          />
          Employee Username:{" "}
          <input
            onChange={handleUsername}
            type="text"
            value={username}
            className="form-control"
            placeholder={employeeTemp.username}
          />

          <input
            type="submit"
            value="Submit"
            className="form-control bg-warning"
          />
        </label>
      </form>
    </>
  );
};

export default UpdateEmployee;

