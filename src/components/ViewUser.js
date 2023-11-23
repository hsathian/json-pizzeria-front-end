import React, {useEffect, useState} from "react";
import UserService from "../service/UserService";

let ViewUser = () =>{
    let [state, setState] = useState({
        users: []
    });

    useEffect(() => {
        UserService.getAllUsers()
        .then((response) => {
            // console.log("Response data" + response.data)
            setState(()=>({
                
                users: response.data
            }));
        },() => {});
      }, []);
      
      console.log(JSON.stringify(state.users))

    return(
<>
<table className="table table-striped text-center">
            <thead className="bg-success">
                <tr>
                    <th>Phone Number</th>
                    <th>Zipcode</th>
                    <th>City</th>
                    <th>Email</th>
                </tr>
                
            </thead>
            <tbody>
                {
                state.users.map((user,i)=>{
                    return(
                        <tr>
                            {user.city}
                        </tr>
                    )
                })
}
            </tbody>
</table>

</>

    );
 }
export default ViewUser;