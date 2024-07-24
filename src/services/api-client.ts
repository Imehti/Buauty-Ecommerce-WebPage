import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://makeup-api.herokuapp.com/api/v1/products.json",
});


export default apiClient;