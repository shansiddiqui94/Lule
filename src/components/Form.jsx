import React from 'react'
import {useState} from "react"

function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [post, setPost] = useState("")

    function handleName(e){
        setName(e.target.value)
    }

    function handleEmail(e){
        setEmail(e.target.value)
    }


    function handlePost(e){
        setPost(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        alert("Successfully Posted")
        
    }


    // in our handleSubmit we are doing a fetch request and we will pass our states in through there to be added into our DB.json

  return (

    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" onChange={handleName}/>
            <input type="text" placeholder="email" onChange={handleEmail}/>
            <textarea rows={4} cols={50} placeholder="Add your blog..." onChange={handlePost}/>

        </form>
        <button type='submit'>Submit</button>
    </div>
  )
}

export default Form