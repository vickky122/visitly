import axios from 'axios';

const API_BASE_URL = 'http://localhost:8090/api/items';
// const API_AUTH_URL = 'http://localhost:8090/api/auth/login';
// const API_SIGNUP_URL = 'http://localhost:8090/api/auth/signup'; 

export const getItems = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const addItem = async (item) => {
  const response = await axios.post(API_BASE_URL, item);
  return response.data;
};

export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};

// Function to authenticate user and get JWT token
// export const login = async (username, password) => {
//   try {
//     const response = await axios.post(API_AUTH_URL, { username, password });
//     return response.data;  // JWT token
//   } catch (error) {
//     console.error('Error logging in:', error);
//     throw error;
//   }
// };

// // Function to sign up a new user
// export const signup = async (username, password) => {
//   try {
//     const response = await axios.post(API_SIGNUP_URL, { username, password });
//     return response.data;  // Handle response after successful signup (e.g., user info or success message)
//   } catch (error) {
//     console.error('Error signing up:', error);
//     throw error;
//   }
// };

// // Function to set the token in the Authorization header
// export const setAuthToken = (token) => {
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common['Authorization'];
//   }
// };
