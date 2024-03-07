import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Form from './components/Form'
function App() {

const [blogInfo, setBlogInfo] = useState([])
useEffect(() => {
  fetch("http://localhost:4000/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Log the data to the console
      setBlogInfo(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);


  return (
    <>
    {blogInfo.map((post) => (
      <div key={post.id}>
        <h2>{post.name}</h2>
        <p>{post.email}</p>
        <p>{post.blog}</p>
      </div>
    ))}
    <Header />
    <About />
    <Form />
  </>
  )
}

export default App
