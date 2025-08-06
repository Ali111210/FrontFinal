import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'
import Home from './pages/Home';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  );
}
  