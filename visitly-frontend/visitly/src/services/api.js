import axios from 'axios';

const API_BASE_URL = 'http://localhost:8090/api/items';

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
