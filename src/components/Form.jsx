// import React from 'react'
// import {useState} from "react"

// function Form() {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [post, setPost] = useState("")

//     function handleName(e){
//         setName(e.target.value)
//     }

//     function handleEmail(e){
//         setEmail(e.target.value)
//     }


//     function handlePost(e){
//         setPost(e.target.value)
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
      
//         // Create an object with the form data
//         const formData = {
//           name: name,
//           email: email,
//           post: post
//         };
      
//         fetch("http://localhost:4000/posts", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(formData)
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             console.log(data); // Log the response from the server
//             alert("Successfully Posted");
//           })
//           .catch((error) => {
//             console.error("Error posting data:", error);
//           });
//       }

//     // in our handleSubmit we are doing a fetch request and we will pass our states in through there to be added into our DB.json

//   return (

//     <div>
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="name" onChange={handleName} value={name}/>
//             <input type="text" placeholder="email" onChange={handleEmail} value={email}/>
//             <textarea rows={4} cols={50} placeholder="Add your blog..." onChange={handlePost} value={post}/>

//         </form> 
//         <button type='submit'>Submit</button>
//     </div>
//   )
// }

// export default Form

import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    post: ''
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Successfully Posted");
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={formData.email}
        />
        <textarea
          rows={4}
          cols={50}
          name="post"
          placeholder="Add your blog..."
          onChange={handleChange}
          value={formData.post}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;