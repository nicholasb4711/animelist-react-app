import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000"
const USERS_API = `${API_BASE}/api/users`;

export const findAllUsers = async () => {
    const response = await axios.get(USERS_API);
    return response.data;
}