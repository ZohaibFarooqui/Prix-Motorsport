import React from 'react';

const Home = () => (
  <main className='main'>
     <section className="hero-section">
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/blurred-car-repair-shop.jpg" className="d-block w-100" alt="Car Repair"/>
            <div className="home-content">
              <h3>The Best in Town</h3>
              <h2>Auto Repair Since 1967</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/vecteezy_auto-mechanic-repairs-car-the-employee-carries-out_5205563.jpg" className="d-block w-100" alt="Quality Services"/>
            <div className="home-content">
              <h3>Quality Services</h3>
              <h2>Expert services for all your vehicle needs</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/vecteezy_mechanic-using-car-battery-performance-meter_6104705.jpg" className="d-block w-100" alt="Reliable Repairs"/>
            <div className="home-content">
              <h3>Reliable Repairs</h3>
              <h2>Trust us for reliable and efficient repairs</h2>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>

    <section className="services-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="service-box">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4>Location Details</h4>
              <p>Block 7 <br/>Gulistan-e-Johar, Karachi<br/>+ (12) 123 - 556 - 7890</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service-box">
              <div className="icon">
                <i className="fas fa-car-crash"></i>
              </div>
              <h4>Emergency Repair</h4>
              <p>Low rates and emergency service available 24 hours a day every day of the year</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service-box">
              <div className="icon">
                <i className="fas fa-compass"></i>
              </div>
              <h4>Get Directions</h4>
              <p>Get directions to Prix Motorsport in Karachi and have your car checked today</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service-box ">
              <div className="icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h4>Make Appointment</h4>
              <p>Book your appointment today using our simple online calendar and lock at any time</p>
            </div>
          </div>
        </div>
      </div>
    <div className="open">
      <div className="icon">
        <i className="fas fa-exclamation"></i>
      </div>
      <p>We're open for Business 6 days a week.</p>
</div>

      
    </section>

    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <blockquote>
            <p>"The service at Prix Motorsports is unmatched. My car runs like new after every visit!"</p>
            <footer>- John Doe</footer>
          </blockquote>
          <blockquote>
            <p>"Highly recommend Prix Motorsports for their expertise and customer service."</p>
            <footer>- Jane Smith</footer>
          </blockquote>
        </div>
      </div>
    </section>

    <section className="brands-section">
      <div className="container">
        <h2>Featured Brands</h2>
        <div className="brands-grid">
          <img src="images/honda.jpg" alt="Brand 1" />
          <img src="/path/to/brand2.png" alt="Brand 2" />
          <img src="/path/to/brand3.png" alt="Brand 3" />
          <img src="/path/to/brand4.png" alt="Brand 4" />
        </div>
      </div>
    </section>

    <section className="offers-section">
      <div className="container">
        <h2>Special Offers</h2>
        <div className="offers-grid">
          <div className="offer-item">
            <h3>10% Off on Your First Service</h3>
            <p>Get a discount on your first visit. Use code: FIRST10</p>
          </div>
          <div className="offer-item">
            <h3>Free Check-up with Every Major Repair</h3>
            <p>Receive a complimentary vehicle check-up with every major repair service.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="container">
        <h2>Stay Updated</h2>
        <p>Sign up for our newsletter to receive the latest updates and special offers.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section>

    <section className="stats-section">
      <div className="container">
        <h2>Our Achievements</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Vehicles Serviced</p>
          </div>
          <div className="stat-item">
            <h3>10 Years</h3>
            <p>Of Experience</p>
          </div>
          <div className="stat-item">
            <h3>1,000+</h3>
            <p>Satisfied Customers</p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
