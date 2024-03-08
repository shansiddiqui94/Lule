import React, { useState } from 'react';
import './Form.css';

function Form({ blogInfo, setBlogInfo }) {
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
    // Post request for plants
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

        // Update the state with new data
        setBlogInfo([...blogInfo, data]);

        // Reset the form fields
        setFormData({
          name: "",
          email: "",
          post: ""
        });
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  }

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
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
