import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
 import About from './components/About';
import Contact from './components/Contact';
import Form from './components/Form';
import NavBar from './components/NavBar'; // Importing NavBar component
import DeletePost from './components/DeletePost';
import PlantCard from './components/PlantCard';
// import PlantCards from './components/PlantCards';



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

  //Delete card
  function handleDeletePost(postId) {
    fetch(`http://localhost:4000/posts/${postId}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Update the state after deletion
      setBlogInfo(prevBlogInfo => prevBlogInfo.filter(post => post.id !== postId));
    })
  }


  return (
   
    <div className="container">
      <NavBar /> {/* Adding NavBar */}
      <Header />
      <Contact />
      <Form blogInfo={blogInfo} setBlogInfo={setBlogInfo} />
      <PlantCard/>

      <div className="card-container">
  {blogInfo.map((post) => (
    <div key={post.id} className="card">
      <div className="info">
        <h2>{post.name}</h2>
        <p>{post.email}</p>
        <p>{post.blog}</p>
        <DeletePost postId={post.id} handleDeletePost={handleDeletePost} />
      </div>
    </div>
  ))}
</div>
</div>
  );
}


export default App;