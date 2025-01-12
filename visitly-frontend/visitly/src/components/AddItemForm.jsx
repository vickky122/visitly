import React, { useState } from 'react';
import { addItem } from '../services/api';

const AddItemForm = () => {
  const [item, setItem] = useState({ name: '', description: '', price: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItem(item);
    alert('Item added successfully!');
    setItem({ name: '', description: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={item.name}
        onChange={(e) => setItem({ ...item, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={item.description}
        onChange={(e) => setItem({ ...item, description: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={item.price}
        onChange={(e) => setItem({ ...item, price: e.target.value })}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;