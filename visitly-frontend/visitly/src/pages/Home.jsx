import React from 'react';
import ItemList from '../components/ItemList';
import AddItemForm from '../components/AddItemForm';

const Home = () => (
  <div>
    <h1>Welcome to Visitly</h1>
    <AddItemForm />
    <ItemList />
  </div>
);

export default Home;
