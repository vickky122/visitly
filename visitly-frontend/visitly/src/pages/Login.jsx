import React, { useState } from 'react';
import { login, setAuthToken } from '../services/api'; // Import the functions

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      setAuthToken(data.token);  // Set the token for future API requests
      // Redirect or take any other action after successful login
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username" 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
