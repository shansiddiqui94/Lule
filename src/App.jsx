import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Form from './components/Form';
import NavBar from './components/NavBar'; // Importing NavBar component

function App() {
  const [blogInfo, setBlogInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBlogInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <NavBar /> {/* Adding NavBar */}
      <Header />
      <About />
      <Contact />
      <Form />
      <div className="card-container">
  {blogInfo.map((post) => (
    <div key={post.id} className="card">
      <div className="info">
        <h2>{post.name}</h2>
        <p>{post.email}</p>
        <p>{post.blog}</p>
      </div>
    </div>
  ))}
</div>
</div>
  );
}

export default App;