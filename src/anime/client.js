import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000/api";
const USERS_API = `${API_BASE}/anime`;

export const findAllAnime = async () => {
    const response = await axios.get(USERS_API);
    return response.data;
}

export const findAnimeById = async (id) => {
    const response = await axios.get(`${USERS_API}/${id}`);
    return response.data;
}

export const findAnimeByTitle = async (title) => {
    const response = await axios.get(`${USERS_API}/title/${title}`);
    return response.data;
}

export const uploadAnimeImage = async (file) => {
    const response = await axios.post(`${USERS_API}/upload`, file);
    return response.data;
}

export const updateAnime = async (id, anime) => {
    const response = await axios.put(`${USERS_API}/${id}`, anime);
    return response.data;
}

