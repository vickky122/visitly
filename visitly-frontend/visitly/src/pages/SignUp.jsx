import React, { useState } from 'react';
import { signup } from '../services/api'; // Import the signup function

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const data = await signup(username, password);
      setSuccess('Signup successful! You can now log in.');
      setError(''); // Reset error message on successful signup
    } catch (error) {
      setError('Signup failed. Please try again.');
      setSuccess(''); // Reset success message on error
    }
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Sign Up</button>
      </form>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
};

export default Signup;
