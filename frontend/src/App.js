import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ImagesFoodCard from './component/ImagesFoodCard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/images-food-card" element={<ImagesFoodCard />} />
      </Routes>
    </Router>
  );
}

export default App;
