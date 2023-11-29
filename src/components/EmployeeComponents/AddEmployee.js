
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../service/EmployeeService";


let AddEmployee = () =>{
    let navigate = useNavigate();
    let [username, setUsername] = useState('');

    let handleUsername = (e) => { setUsername(e.target.value)}

    let handleSubmit = (e) => {
        e.preventDefault();
    
        if (username.trim() === '') {
            alert("Username cannot be empty. Please enter a username.");
            return;
        }
    
        let employee = { username: username };
    
        EmployeeService.addEmployee(employee).then(() => {
            alert("Employee has been added successfully!");
            navigate({ pathname: '/viewemployees' });
        }, () => {
            alert("Employee creation failed");
        });
    }
    return(
<>
<h2>Add Employee Information</h2>
<form onSubmit={handleSubmit}>
    <label>
        Username: <input onChange={handleUsername} type="text" value={username} className="form-control"/>

        <input type="submit" value="Submit" className="form-control bg-warning"/>
    </label>
</form>
</>

    );
}
export default AddEmployee;