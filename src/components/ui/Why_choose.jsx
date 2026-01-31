import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Import for internal jumps
import "../../assets/CSS/Why_choose.css";
import bgImage from "../../assets/IMG/whychoose.jpg";

const Why_choose = () => {
  const schedule = [
    { day: "SUNDAY", time: "10AM - 8PM" },
    { day: "MONDAY", time: "10AM - 8PM" },
    { day: "TUESDAY", time: "10AM - 8PM" },
    { day: "WEDNESDAY", time: "10AM - 8PM" },
    { day: "THURSDAY", time: "10AM - 8PM" },
    { day: "FRIDAY", time: "10AM - 8PM" },
    { day: "SATURDAY", time: "10AM - 8PM" },
  ];

  const reasons = [
    "Always welcoming environment for all genders",
    "Our master stylists focus on precision and quality",
    "We value both the time and the beauty goals of our clients",
    "We work only with high-quality, hypoallergenic premium products",
    "All surfaces and tools are strictly sanitized for your safety",
  ];

  return (
    /* The id="why_choose" allows the Header Nav to find this section */
    <section
      className="why-choose"
      id="why_choose"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${bgImage})`,
      }}
    >
      <div className="why-container container">
        {/* Left Side: Working Hours Card */}
        <div className="hours-card">
          <h2 className="section-title">WORKING HOURS</h2>
          <div className="schedule-list">
            {schedule.map((item, index) => (
              <div key={index} className="schedule-item">
                <span className="day">{item.day}</span>
                <span className="time">{item.time}</span>
              </div>
            ))}
          </div>

          {/* ScrollLink added to button for smooth transition to Contact */}
          <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
            <button className="book-online-btn">BOOK ONLINE</button>
          </ScrollLink>
        </div>

        {/* Right Side: Why Choose Us Content */}
        <div className="why-content">
          <h1 className="why-title">Why Choose Us</h1>
          <p className="why-subtitle">
            Experience premium care. Here are 5 reasons why our clients trust
            our professional salon services:
          </p>

          <ul className="reasons-list">
            {reasons.map((reason, index) => (
              <li key={index} className="reason-item">
                <i className="ri-double-quotes-r"></i>
                <span>{reason}</span>
              </li>
            ))}
          </ul>

          <ScrollLink to="pricing" smooth={true} duration={500} offset={-70}>
            <button className="book-now-btn">View Our Pricing</button>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Why_choose;
