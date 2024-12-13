import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.allorigins.win/raw?url=http://makeup-api.herokuapp.com/api/v1/products.json",
});


export default apiClient;