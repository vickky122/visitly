import axios from 'axios';

const API_BASE_URL = 'http://localhost:8090/api/items';
const AUTH_URL = 'http://localhost:8080/api/auth';

// Authentication Service
const login = async (username, password) => {
  const response = await axios.post(`${AUTH_URL}/login`, {
    username,
    password,
  });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('token');
};

const getAuthHeader = () => {
  return {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
};

// Item Management Service
export const getItems = async () => {
  const response = await axios.get(API_BASE_URL, {
    headers: getAuthHeader(),
  });
  return response.data;
};

export const addItem = async (item) => {
  const response = await axios.post(API_BASE_URL, item, {
    headers: getAuthHeader(),
  });
  return response.data;
};

export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};

export default { login, logout, getAuthHeader };
