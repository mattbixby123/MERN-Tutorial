import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    // Fetch data from the Express server
    axios.get('http://localhost:5555/books')
      .then(response => console.log(response))
      // .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
      <h1>MERN Stack Book App</h1>
    </div>
  );
};
export default App;