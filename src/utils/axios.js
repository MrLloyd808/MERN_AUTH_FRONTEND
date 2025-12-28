import axios from "axios";

export default axios.create({
    baseURL: "https://mern-auth-backend-gv8r.onrender.com",
    withCredentials: true
})