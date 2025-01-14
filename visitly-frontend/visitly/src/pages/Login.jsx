// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault(); // Prevent default form submission
//     setError(null); // Clear previous errors

//     try {
//       const response = await axios.post('http://localhost:8090/api/auth/login', {
//         username,
//         password,
//       });

//       console.log('Login successful:', response.data);

//       // Assuming the response contains a JWT token
//       localStorage.setItem('token', response.data.token);

//       // Redirect to the home page or another protected route
//       window.location.href = '/home'; // Update the path as needed
//     } catch (err) {
//       console.error('Login failed:', err);
//       setError('Invalid username or password'); // Set error message
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Login</h1>
//       <form onSubmit={handleLogin} style={styles.form}>
//         <div style={styles.inputGroup}>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.inputGroup}>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={styles.input}
//           />
//         </div>
//         <button type="submit" style={styles.button}>
//           Login
//         </button>
//       </form>
//       {error && <p style={styles.error}>{error}</p>}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '400px',
//     margin: '50px auto',
//     textAlign: 'center',
//     fontFamily: 'Arial, sans-serif',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '15px',
//   },
//   inputGroup: {
//     textAlign: 'left',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//   },
//   button: {
//     padding: '10px',
//     fontSize: '16px',
//     backgroundColor: '#007BFF',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//   },
//   error: {
//     color: 'red',
//     marginTop: '10px',
//   },
// };

// export default Login;
