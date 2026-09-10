import axios from "axios";

const API_HOST = "https://valvenok-api-container.mangobeach-29eb5614.ukwest.azurecontainerapps.io";
 //const API_HOST = "http://localhost:5260"; // uncomment to test against a local backend

const BASE_URL = typeof window === "undefined" ? API_HOST : "";

/** */
const axiosClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
