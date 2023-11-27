import axios from "../axios-config";

const baseUrl = "http://localhost:8080/api/employees"; // Fix: Added 'http://' to the base URL

class EmployeeService {
    getAllEmployees() {
        // Implement your logic to get all users
        return axios.get(baseUrl)
        .then(response => {
            console.log("Full response:", response); // Log the data received from the server
            console.log("Response data:", response.data);
            return response.data; // Return the data to the calling component if needed
        })
        .catch(error => {
            console.error("Error fetching customers:", error);
            throw error; // You might want to handle errors differently in a production environment
        });
    }

    addEmployee(employeeDto) {
        return axios.post(baseUrl, employeeDto)
            .then(response => {
                console.log(response.data); // Log the data received from the server
                return response.data; // Return the data to the calling component if needed
            })
            .catch(error => {
                console.error(error);
                throw error; // You might want to handle errors differently in a production environment
            });
    }
    // findPhoneNumber(phone_number){
    //     return axios.get(baseUrl+phone_number)
    //     .then(response => {
    //         console.log("Full response:", response); // Log the data received from the server
    //         console.log("Response data:", response.data);
    //         return response.data; // Return the data to the calling component if needed
    //     })
    //     .catch(error => {
    //         console.error("Error fetching customers:", error);
    //         throw error; // You might want to handle errors differently in a production environment
    //     });

    // }

    updateEmployee(employee_id, updatedEmployeeDto) {
        // The updateCustomer method should take a phone number and updated customer data
        return axios.put(`${baseUrl}/${employee_id}`, updatedEmployeeDto)
            .then(response => {
                console.log(response.data); // Log the data received from the server
                return response.data; // Return the data to the calling component if needed
            })
            .catch(error => {
                console.error(error);
                throw error; // You might want to handle errors differently in a production environment
            });
    }

    deleteEmployee(employee_id) {
        // The deleteCustomer method should take a phone number
        return axios.delete(`${baseUrl}/${employee_id}`)
            .then(response => {
                console.log(response.data); // Log the data received from the server
                return response.data; // Return the data to the calling component if needed
            })
            .catch(error => {
                console.error(error);
                throw error; // You might want to handle errors differently in a production environment
            });
    }
}

export default new EmployeeService();