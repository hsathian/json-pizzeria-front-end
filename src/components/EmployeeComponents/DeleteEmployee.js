import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EmployeeService from "../../service/EmployeeService";

let DeleteEmployee = () =>{
    let location = useLocation();
    let navigate = useNavigate();

    useEffect(()=>{
        EmployeeService.deleteEmployee(location.state.employee_id).then((response) => {
            alert('Employee ID' + location.state.employee_id + 'has been deleted successfully!')
            navigate({pathname : "/viewemployees"})
        }, ()=>{})
    }, []);
    return(
<>
</>

    );
}
export default DeleteEmployee;