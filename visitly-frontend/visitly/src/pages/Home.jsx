import React, { useState } from 'react';
import ItemList from '../components/ItemList';
import AddItemForm from '../components/AddItemForm';

const Home = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshItems = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Welcome to Visitly</h1>
      <AddItemForm onItemAdded={refreshItems} />
      <ItemList refresh={refresh} />
    </div>
  );
};

export default Home;
