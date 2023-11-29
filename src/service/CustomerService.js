
import axios from "../axios-config";

const baseUrl = "http://localhost:8080/api/customers"; // Fix: Added 'http://' to the base URL

class CustomerService {
    getAllCustomers() {
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

    addCustomer(customerDto) {
        // The addCustomer method should take a customerDto parameter representing the data to be sent to the server
        return axios.post(baseUrl, customerDto)
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

    updateCustomer(phone_number, updatedCustomerDto) {
        // The updateCustomer method should take a phone number and updated customer data
        return axios.put(`${baseUrl}/${phone_number}`, updatedCustomerDto)
            .then(response => {
                console.log(response.data); // Log the data received from the server
                return response.data; // Return the data to the calling component if needed
            })
            .catch(error => {
                console.error(error);
                throw error; // You might want to handle errors differently in a production environment
            });
    }

    // deleteCustomer(phone_number) {
    //     // The deleteCustomer method should take a phone number
    //     return axios.delete(`${baseUrl}/${phone_number}`)
    //         .then(response => {
    //             console.log(response.data); // Log the data received from the server
    //             return response.data; // Return the data to the calling component if needed
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             throw error; // You might want to handle errors differently in a production environment
    //         });
    // }
}

export default new CustomerService();