import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import Offers from '../page/Offers'
import Daily from '../page/Daily'
import Flash from '../page/Flash'
import Login from '../page/Login.jsx'
import Register from '../page/Register.jsx'
// import Browse from '../page/Browse'

function Navigation() {
  return (
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/Daily" element={<Daily />} />
      <Route path="/Flash" element={<Flash />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
   
  )
}

export default Navigation
