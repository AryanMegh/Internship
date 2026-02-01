import React, { useState } from "react";
import "../../assets/CSS/Contact_page.css";
import GlobalApi from "../../../service/GlobalApi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const resp = await GlobalApi.createContactEntry(formData);
      console.log("Success:", resp.data);
      alert("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Improved error logging for 405 debugging
      console.error("Status Code:", error.response?.status);
      console.error("Server Response:", error.response?.data);

      if (error.response?.status === 405) {
        alert(
          "Error 405: Method not allowed. Please check Strapi permissions for 'create'.",
        );
      } else {
        alert("Failed to send message. Please try again.");
      }
    } finally {
      setLoading(false);
    }
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
          <button
            type="submit"
            className="button"
            id="Signup_btn"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;