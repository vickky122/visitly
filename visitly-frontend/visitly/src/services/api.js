import axios from 'axios';

const API_BASE_URL = 'http://localhost:8090/api/items';
// const API_AUTH_URL = 'http://localhost:8090/api/auth/login';
// const API_SIGNUP_URL = 'http://localhost:8090/api/auth/signup'; 

const items = [
  { id: 1, name: "Television", description: "42-inch Smart LED TV", price: 25000 },
  { id: 2, name: "Refrigerator", description: "Double Door 300L", price: 35000 },
  { id: 3, name: "Microwave", description: "Solo Microwave Oven", price: 8000 },
  { id: 4, name: "Washing Machine", description: "Top Load 7kg", price: 22000 },
  { id: 5, name: "Air Conditioner", description: "Split AC 1.5 Ton", price: 40000 },
];

export const getItems = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(items), 500); // Simulate API delay
  });
};

export const addItem = async (item) => {
  const id = items.length + 1;
  const newItem = { id, ...item };
  items.push(newItem);
  return new Promise((resolve) => resolve(newItem));
};

export const deleteItem = async (id) => {
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    return new Promise((resolve) => resolve({ message: "Item deleted successfully!" }));
  } else {
    throw new Error("Item not found");
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

// Function to sign up a new user
// export const signup = async (username, password) => {
//   try {
//     const response = await axios.post(API_SIGNUP_URL, { username, password });
//     return response.data;  // Handle response after successful signup (e.g., user info or success message)
//   } catch (error) {
//     console.error('Error signing up:', error);
//     throw error;
//   }
// };

// Function to set the token in the Authorization header
// export const setAuthToken = (token) => {
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common['Authorization'];
//   }
// };
