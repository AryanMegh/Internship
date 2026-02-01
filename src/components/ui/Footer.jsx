import React from "react";
import { Link } from "react-router-dom";
import "../../assets/CSS/Header.css";

function Footer() {
  return (
    <footer className="footer section">
      {/* Decorative shapes */}
      <div className="shape shape__big"></div>
      <div className="shape shape__small"></div>

      <div className="footer__container container grid">
        {/* Brand/Logo Section */}
        <div className="footer__content">
          <Link to="/" className="nav__logo">
            <img
              src="/logo.svg"
              className="cursor-pointer"
              width={100}
              height={100}
              alt="Logo"
            />
          </Link>
          <p className="footer__description">
            We offer the best salon services <br /> with the most recognized
            stylists <br /> in the industry.
          </p>
        </div>

        {/* Company Links */}
        <div className="footer__content">
          <h3 className="footer__title">Company</h3>
          <ul className="footer__links">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#history" className="footer__link">
                History
              </a>
            </li>
            <li>
              <a href="#shop" className="footer__link">
                Shop
              </a>
            </li>
          </ul>
        </div>

        {/* Information Links */}
        <div className="footer__content">
          <h3 className="footer__title">Information</h3>
          <ul className="footer__links">
            <li>
              <a href="#quote" className="footer__link">
                Request a quote
              </a>
            </li>
            <li>
              <a href="#dealer" className="footer__link">
                Find a dealer
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer__content">
          <h3 className="footer__title">Follow Us</h3>
          <ul className="footer__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/codewithharry/"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <i className="ri-linkedin-line"></i>
            </a>
          </ul>
        </div>
      </div>

      <span className="footer__copy">
        &#169; Bedimcode. All rights reserved
      </span>
    </footer>
  );
}

export default Footer;