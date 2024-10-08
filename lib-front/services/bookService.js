import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/book'; // Change to your API URL

export const getAllBooks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getBookById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createBook = async (book) => {
    const response = await axios.post(API_URL, book);
    return response.data;
};

export const deleteBook = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
