import axios from "axios";
//const BASE_URL = "http://localhost:5094//";
const BASE_URL ="https://valvenok-api-container.mangobeach-29eb5614.ukwest.azurecontainerapps.io";
const axiosClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
