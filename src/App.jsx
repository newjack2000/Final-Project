import { useState, useEffect } from 'react'
import './App.css'
import Home from './containers/home/Home'
import Welcome from './containers/welcome/Welcome'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './supabase/login/loginPage'



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
