import React from "react";
import { Link } from "react-scroll"; // Import Link for smooth scrolling
import "../../assets/CSS/Hero.css"; 
import heroimg from "../../assets/IMG/hero.jpg";
import sissor from "../../assets/IMG/sissor.png";
import trimmer from "../../assets/IMG/trimmer.png";
import menshair from "../../assets/IMG/menshair.png";
import womenhair from "../../assets/IMG/womenhair.png";

function Hero() {
  return (
    <main className="main-wrapper">
      {/* ID added for navigation targeting */}
      <section id="hero" className="hero-section">
        <div className="hero-container">
          {/* Left Side: Info */}
          <div className="hero-content">
            <span className="subtitle">WELCOME TO</span>
            <h1 className="title">
              Barber-Shop
            </h1>

            <div className="contact-info">
              <p><i className="ri-map-pin-2-line"></i> 254 W 27ST THANE MH INDIA 400601</p>
              <p><i className="ri-phone-line"></i> +91 890 768 1209 / +91 871 256 8901</p>
              <p><i className="ri-mail-line"></i> company@gmail.com / spasalooon@gmail.com</p>
              <p><i className="ri-customer-service-line"></i> customercare@email.com</p>
            </div>

            {/* Replaced button with Scroll Link */}
            <Link 
              smooth={true} 
              duration={800} 
              offset={-70} // Adjust this based on your header height
              className="book-btn"
              style={{ cursor: 'pointer', display: 'inline-block' }}
            >
              <a href="#book_appointment">BOOK APPOINTMENT</a>
            </Link>
          </div>

          <div className="hero-image-box">
            <img src={heroimg} alt="Barber at work" className="hero-img" />
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ID added so the Link above can find this section */}
      <section id="services" className="services-grid">
        <div className="service-card">
          <img src={sissor} alt="Haircut" />
          <p>Regular Haircut</p>
          <button className="more-btn">MORE</button>
        </div>
        <div className="service-card">
          <img src={menshair} alt="menshair" />
          <p>Men's Facial</p>
          <button className="more-btn">MORE</button>
        </div>
        <div className="service-card">
          <img src={trimmer} alt="Shave" />
          <p>Royal Shave</p>
          <button className="more-btn">MORE</button>
        </div>
        <div className="service-card">
          <img src={womenhair} alt="Women Haircut" />
          <p>Women Haircut</p>
          <button className="more-btn">MORE</button>
        </div>
      </section>
    </main>
  );
}

export default Hero;