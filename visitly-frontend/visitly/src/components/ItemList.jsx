import React, { useState, useEffect } from "react";
import { getItems, deleteItem } from "../services/api";
import "./ItemList.css"; // Assuming the CSS file is in the same folder

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
      alert("Failed to fetch items. Please try again later.");
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      try {
        await deleteItem(id);
        // Filter out the deleted item locally
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        alert("Item deleted successfully!");
      } catch (error) {
        console.error("Error deleting item:", error);
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
                className="delete-button"
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
