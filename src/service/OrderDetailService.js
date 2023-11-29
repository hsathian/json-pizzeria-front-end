import axios from "../axios-config";

const baseUrl = "http://localhost:8080/api/orderdetails"; // Fix: Added 'http://' to the base URL

class OrderDetailService {
    getAllOrderDetails() {
        return axios
          .get(baseUrl)
          .then((response) => response.data)
          .catch((error) => {
            console.error("Error fetching customers orders:", error);
            throw error;
          });
      }
    
      addOrderDetail(orderDto) {
        return axios
          .post(baseUrl, {
            order_detail_id: orderDto.order_detail_id,
            date: orderDto.date,
            zipcode: orderDto.zipcode,
            customerOrder: orderDto.customerOrder,
            product: orderDto.product,
            quantity: orderDto.quantity,
            priceCharged: orderDto.priceCharged,
            historicPrice: orderDto.historicPrice,
            employee: orderDto.employee,
          })
          .then((response) => response.data)
          .catch((error) => {
            console.error("Error adding customer order", error);
            throw error;
          });
      }
    
    //   getOrdersByZipcodeAndWeek(zipcode, startDate, endDate) {
    //     return axios.get(`${baseUrl}/getOrdersByZipcodeAndWeek`, {
    //       params: {
    //         zipcode: zipcode,
    //         startDate: startDate,
    //         endDate: endDate,
    //       },
    //     })
    //       .then(response => {
    //         console.log("Full response:", response);
    //         console.log("Response data:", response.data);
    //         return response.data;
    //       })
    //       .catch(error => {
    //         console.error("Error fetching orders by zipcode and week:", error);
    //         throw error;
    //       });
    //   }
    
      getOrdersByEmployeeAndWeek(employeeId, startDate, endDate) {
        console.log("Making request to getOrdersByEmployeeAndWeek with the following parameters:", { employeeId, startDate, endDate });
        return axios.get(`${baseUrl}/getOrdersByEmployeeAndWeek?employee_id=${employeeId}&startDate=${startDate}&endDate=${endDate}`, {
        //   params: {
        //     employeeId: employeeId,
        //     startDate: startDate,
        //     endDate: endDate,
        //   },
        })
          .then(response => {
            console.log("Full response:", response);
            console.log("Response data:", response.data);
            return response.data;
          })
          .catch(error => {
            console.error("Error fetching orders by employee and week:", error);
            throw error;
          });
      }
    
    
    
    }
    
export default new OrderDetailService();