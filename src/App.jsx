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
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
