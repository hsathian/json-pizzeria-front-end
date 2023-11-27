import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../service/EmployeeService";

const ViewEmployee = () => {
  const [state, setState] = useState({
    employees: [],
  });

  useEffect(() => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        console.log("Full response:", response);

        // Check if response.data is defined and is an array with length greater than 0
        if (response && Array.isArray(response) && response.length > 0) {
          console.log("Response data:", response);
          setState({
            employees: response
          });
        } else {
          console.warn("Response data is either undefined or an empty array.");
        }
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
}, []);

  let navigate = useNavigate();

  let handleAddEmployee = () =>{
    navigate({pathname: "/addemployees"})

  }
  let handleViewHome = () =>{
    navigate({pathname: "/"})

  }
  let handleUpdateEmployee = (employee_id) =>{
    navigate("/updateemployees", {state : {employee_id}});
  }
  let handleDeleteEmployee = (employee_id) =>{
    navigate("/deleteemployees", {state : {employee_id}});
    
  }

  return (
        <>
        <h2>Employee Table</h2>
          <table className="table table-striped text-center">
            <thead className="bg-success">
              <tr>
                <th>Employee ID</th>
                <th>Employee Username</th>
                {/* <th>Employee Password</th> */}
              </tr>
            </thead>
            <tbody>
              {state.employees.length > 0 ? (
                state.employees.map((employee, i) => (
                    <tr key={employee.employee_id}>
                    <td>{employee.employee_id}</td>
                    <td>{employee.username}</td>
                    <td>
                      <button className="btn btn-warning" onClick={()=>{handleUpdateEmployee(employee.employee_id)}}>Update</button>
                      <button className="btn btn-danger" onClick={()=>{handleDeleteEmployee(employee.employee_id)}}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No employees available</td>
                </tr>
              )}
            </tbody>
          </table>
          <button className="btn btn-success form-control" onClick={handleAddEmployee}>Add Employee</button>
          <button className="btn btn-danger form-control" onClick={handleViewHome}>Exit</button>
        </>
      );      
};

export default ViewEmployee;