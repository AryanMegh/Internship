import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link as RouterLink } from "react-router-dom"; // Renamed to avoid conflict
import { Link as ScrollLink } from "react-scroll"; // The smooth scroll magic
import "../../assets/CSS/Navbar.css";

// Component Imports
import Hero from "./Hero";
import Why_choose from "./Why_choose";
import Pricing from "./Pricing";
import Services from "./Services";
import Contact from "./Contact";
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
            <span className="logo-bold">Unisex</span>
            <span className="logo-italic">Salon</span>
          </div>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust based on your navbar height
                  duration={500}
                  className="nav-item-link"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}

            {/* Auth Logic */}
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

      {/* Main Content with IDs for scrolling */}
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
      </main>

      <Footer />
    </div>
  );
}

export default Header;