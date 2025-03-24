
import React from 'react';
import './HomePage.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Crispy_Nest</div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Delicious Food Delivered to Your Door</h1>
          <p>Explore our wide range of dishes and enjoy the best food experience from the comfort of your home.</p>
          <button className="cta-button">Order Now</button>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="menu" id="menu">
        <h2>Our Special Menu</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src="https://content.jdmagicbox.com/v2/comp/mumbai/g4/022pxx22.xx22.220318090606.c5g4/catalogue/the-chums-mumbai-fast-food-1iir5j2yj1.jpg" alt="Dish 1" />
            <h3>Pizza</h3>
            <p>A tasty pizza with fresh toppings.</p>
            <p><strong>$15.99</strong></p>
          </div>
          <div className="menu-item">
            <img src="https://s7d1.scene7.com/is/image/mcdonalds/FreshBeefPage_QPC_2336x1040:2-column-desktop?resmode=sharp2" alt="Dish 2" />
            <h3>Burger</h3>
            <p>A juicy burger with crispy fries.</p>
            <p><strong>$9.99</strong></p>
          </div>
          <div className="menu-item">
            <img src="https://www.southernliving.com/thmb/ucpnRJ2pBd21-FDTfwDPFnzcYgs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Microwave_Pasta_008-2cdc941e066d4b5a823de5fbf334d1f4.jpg" alt="Dish 3" />
            <h3>Pasta</h3>
            <p>Fresh pasta with a rich tomato sauce.</p>
            <p><strong>$12.99</strong></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <p>&copy; 2025 Foodie. All Rights Reserved.</p>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
