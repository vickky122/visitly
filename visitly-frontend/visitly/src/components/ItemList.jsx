import React, { useState, useEffect } from 'react';
import { getItems, deleteItem } from '../services/api';

const ItemList = ({ refresh }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [refresh]);

  const fetchItems = async () => {
    try {
      const data = await getItems();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      try {
        await deleteItem(id);
        fetchItems(); 
        alert("Item deleted successfully!");
      } catch (error) {
        alert("Failed to delete the item. Please try again.");
      }
    }
  };

  return (
    <div>
      <h2>Item List</h2>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> - {item.description} - ₹{item.price}
              <button
                onClick={() => handleDelete(item.id)}
                style={{
                  marginLeft: '10px',
                  backgroundColor: '#ff4d4d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
