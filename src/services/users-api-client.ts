import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://randomuser.me/api",
});


export default apiClient;