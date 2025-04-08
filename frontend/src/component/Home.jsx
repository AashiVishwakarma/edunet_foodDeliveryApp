
import React from 'react';
import './HomePage.css';
import ItemsDisplay from './ItemsDisplay';


const Home = () => {
  return (
    <div className="home-container">

{/* <div>
<ItemsDisplay />
</div> */}
      <header className="header">
        <div className="logo">
          <h1>          </h1></div>
          <div className="hero-content">
          <h1 >Delicious Food Delivered to Your Door</h1>
          <p>Explore our wide range of dishes and enjoy the best food experience from the comfort of your home.</p>
          <button className="cta-button">Order Now</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" >

                        <div class="container my-5 py-5">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6 text-center text-lg-start">
                            <h1 class="display-3 text-white animated slideInLeft">Enjoy Our<br></br>Delicious Meal</h1>
                            <p class="text-white animated slideInLeft mb-4 pb-2"><h3>Your Favorite Food, Just a Click Away.</h3></p>
                            <a href="" class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</a>
                        </div>
                        <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img class="img-fluid" src="img/hero.png" alt=""/>
                        </div>
                    </div>
                </div>
                
        {/* <div className="hero-content">
          <h1 >Delicious Food Delivered to Your Door</h1>
          <p>Explore our wide range of dishes and enjoy the best food experience from the comfort of your home.</p>
          <button className="cta-button">Order Now</button>
        </div> */}
      </section>

      {/* Featured Menu Section */}
      <section className="menu" id="menu">
        <h2>Our Special Menu</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src="https://content.jdmagicbox.com/v2/comp/mumbai/g4/022pxx22.xx22.220318090606.c5g4/catalogue/the-chums-mumbai-fast-food-1iir5j2yj1.jpg" alt="Dish 1" />
            <h3>Pizza</h3>
            <p>A tasty pizza with fresh toppings.</p>
            <p><strong>Rs 199</strong></p>
          </div>
          <div className="menu-item">
            <img src="https://s7d1.scene7.com/is/image/mcdonalds/FreshBeefPage_QPC_2336x1040:2-column-desktop?resmode=sharp2" alt="Dish 2" />
            <h3>Burger</h3>
            <p>A juicy burger with crispy fries.</p>
            <p><strong>Rs 99</strong></p>
          </div>
          <div className="menu-item">
            <img src="https://www.southernliving.com/thmb/ucpnRJ2pBd21-FDTfwDPFnzcYgs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Microwave_Pasta_008-2cdc941e066d4b5a823de5fbf334d1f4.jpg" alt="Dish 3" />
            <h3>Pasta</h3>
            <p>Fresh pasta with a rich tomato sauce.</p>
            <p><strong>Rs 99</strong></p>
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
