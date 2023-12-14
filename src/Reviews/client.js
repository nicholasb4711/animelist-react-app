import axios from "axios";

//Client for getting reviews from the server
const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000/api";
const REVIEWS_API = `${API_BASE}/reviews`;

export const findAllReviews = async () => {
    const response = await axios.get(REVIEWS_API);
    return response.data;
}

export const findReviewById = async (id) => {
    const response = await axios.get(`${REVIEWS_API}/${id}`);
    return response.data;
}

export const findReviewsByAnimeId = async (animeId) => {
    const response = await axios.get(`${REVIEWS_API}/anime/${animeId}`);
    return response.data;
}

export const findReviewsByUserId = async (userId) => {
    const response = await axios.get(`${REVIEWS_API}/user/${userId}`);
    return response.data;
}

export const createReview = async (review) => {
    const response = await axios.post(REVIEWS_API, review);
    return response.data;
}
export const postReview = async (credentials) => {
    const response = await axios.post(
      `${REVIEWS_API}/postReview`, credentials);
    return response.data;
  };

export const updateReview = async (id, review) => {
    const response = await axios.put(`${REVIEWS_API}/${id}`, review);
    return response.data;
}

export const deleteReview = async (id) => {
    const response = await axios.delete(`${REVIEWS_API}/${id}`);
    return response.data;
}

export const deleteReviewsByAnimeId = async (animeId) => {
    const response = await axios.delete(`${REVIEWS_API}/anime/${animeId}`);
    return response.data;
}

export const deleteReviewsByUserId = async (userId) => {
    const response = await axios.delete(`${REVIEWS_API}/user/${userId}`);
    return response.data;
}


