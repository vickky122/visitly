import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from './components/Footer';

const App = () => {
  const { isAuthenticated, isLoading, error } = useAuth0();  // Using Auth0 hook

  // if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* You can add more private routes later */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
