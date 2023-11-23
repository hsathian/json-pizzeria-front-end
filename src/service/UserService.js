import React from "react";
import axios from 'axios';

const baseUrl = "http://localhost:8080/api/customers"; // Fix: Added 'http://' to the base URL

class UserService {
    getAllUsers() {
        // Implement your logic to get all users
        return axios.get(baseUrl)
        .then(response => {
            console.log(response.data); // Log the data received from the server
            return response.data; // Return the data to the calling component if needed
        })
        .catch(error => {
            console.error(error);
            throw error; // You might want to handle errors differently in a production environment
        });
    }

    findUser() {
        // Implement your logic to find a user
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

    updateUser() {
        // Implement your logic to update a user
    }

    deleteUser() {
        // Implement your logic to delete a user
    }
}

export default new UserService();