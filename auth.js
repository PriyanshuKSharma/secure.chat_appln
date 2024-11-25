import axios from 'axios';

export const authenticate = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:8082/api/authenticate', {
      username: username,
      password: password
    });
    console.log('Authentication successful, token:', response.data.token);  // Log the token
    return response.data.token;
  } catch (error) {
    console.error('Authentication error:', error);
    throw error;  // Ensure errors are thrown to be caught in client.js
  }
};
