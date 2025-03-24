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
      < Navbar /> 
      <Routes>
      <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        
      </Routes>
    
    <Routes>
      <Route path="/ImagesFoodCard" element={<ImagesFoodCard />} />
        
        
      </Routes>
    </Router>
      
      

    

    {/* <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <FoodCard
        imageSrc="./images/img1.jpg"
        title="Pizza Margherita"
        description="Delicious pizza with fresh tomato sauce, mozzarella, and basil."
        price={350}
      />
      <FoodCard
        imageSrc="./images/img2.jpg"
        title="Veg Burger"
        description="Juicy vegetable patty with lettuce and cheese."
        price={150}
      />
      <FoodCard
        imageSrc="./images/img3.jpg"
        title="Pasta Alfredo"
        description="Creamy Alfredo pasta with a touch of garlic."
        price={200}
      />


    </div> */}
    </div>
  );
}

export default App;


