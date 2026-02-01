import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../assets/CSS/Navbar.css";

import Hero from "./Hero";
import Why_choose from "./Why_choose";
import Pricing from "./Pricing";
import Services from "./Services";
import Contact from "./Contact";
import Book_appointment from "./Book_appointment";
import Footer from "./Footer";

function Header() {
  const { isSignedIn } = useUser();

  const navItems = [
    { name: "HOME", to: "home" },
    { name: "ABOUT-US", to: "why_choose" },
    { name: "SERVICES", to: "services" },
    { name: "PRICING", to: "pricing" },
    { name: "CONTACT-US", to: "contact" },
  ];

  return (
    <div className="layout-wrapper">
      {/* Navbar is now inside the wrapper but styled to stick */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img
              src="/logo.svg"
              alt="Logo"
              className="cursor-pointer"
              width={50}
              height={50}
            />
            <span className="logo-bold">Barbor</span>-
            <span className="logo-italic">Shop</span>
          </div>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80} // Adjusted for the sticky navbar height
                  duration={500}
                  className="nav-item-link"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}

            <li>
              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <RouterLink to="/auth/sign-in" className="signin-btn">
                  SIGN-IN
                </RouterLink>
              )}
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <section id="home">
          <Hero />
        </section>
        <section id="why_choose">
          <Why_choose />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="book_appointment">
          <Book_appointment />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Header;