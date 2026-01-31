import React, { useState } from "react";
import "../../assets/CSS/Contact_page.css";

const ContactForm = () => {
  // 1. State management for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 2. Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 3. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your API call logic here
    alert("Thank you for your message!");
  };

  return (
    <section className="form">
      <div className="form__data">
        <h1 className="form__title">Contact Us</h1>
      </div>
      <hr />

      <div className="form__container">
        <form onSubmit={handleSubmit} className="SignUp_Form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <br />
          <br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <br />
          <br />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            placeholder="Enter your message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <br />

          <button type="submit" className="button" id="Signup_btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
