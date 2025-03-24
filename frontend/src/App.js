import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ImagesFoodCard from './component/ImagesFoodCard';

const App = () => {
  return (
    <div>
<Router>
  <Navbar />
      < Home /> 
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Navbar" element={<Navbar />} />
        
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        
      </Routes>
    
    <Routes>
      <Route path="/ImagesFoodCard" element={<ImagesFoodCard />} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;


