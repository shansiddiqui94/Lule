import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Form from './components/Form'
import posts from "../db.json"
function App() {


  return (
    <>
     <Header/>
     <About/>
     <Form />
    </>
  )
}

export default App
