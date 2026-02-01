import React, { useState } from "react";
import "../../assets/CSS/Contact_page.css";
import GlobalApi from "../../../service/GlobalApi";

const Book_appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    service: "",
    date: "",
    time: "",
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
      const resp = await GlobalApi.createAppointment_Entry(formData);
      alert("Booking successful!", resp);
      setFormData({ name: "", age: "", service: "", date: "", time: "" });
    } catch (error) {
      console.error("Status:", error.response?.status);
      console.error("Details:", error.response?.data);
      alert("Error: " + (error.response?.data?.error?.message || "Submission failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="form" id="book_appointment">
      <div className="form__data">
        <h1 className="form__title">Book a Service</h1>
      </div>
      <hr />
      <div className="form__container">
        <form onSubmit={handleSubmit} className="SignUp_Form">
          {/* Name Field */}
          <label>Name:</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
          
          <br />

          {/* Age Field */}
          <label>Age:</label>
          <input type="number" name="age" className="form-control" value={formData.age} onChange={handleChange} required />
          
          <br />

          {/* Service Selection */}
          <label>Service:</label>
          <select name="service" className="form-control" value={formData.service} onChange={handleChange} required>
            <option value="">Select a Service</option>
            <option value="Beard-Trim">Beard Trim</option>
            <option value="Shaving">Shaving</option>
            <option value="Hair-cut">Hair-cut</option>
            <option value="Hair-color">Hair-color</option>
            <option value="Facial">Facial</option>
            <option value="Pedicare">Pedicare</option>
          </select>

          <br />

          {/* Date Field */}
          <label>Date:</label>
          <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
          
          <br />

          {/* Time Field */}
          <label>Time:</label>
          <input type="time" name="time" className="form-control" value={formData.time} onChange={handleChange} required />

          <br />

          <button type="submit" className="button" id="Signup_btn" disabled={loading}>
            {loading ? "Processing..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Book_appointment;