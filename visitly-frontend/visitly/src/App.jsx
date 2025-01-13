import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute'; 

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<LoginForm />} /> 
      <PrivateRoute path="/home" element={<Home />} /> 
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
