import React from "react";
import "../../assets/CSS/Service_pae_style.css";
import serviceImg from "../../assets/IMG/servicimg.jpg";

const Services = () => {
  const serviceCards = [
    { title: "Hair Cut & Styling", icon: "✂️" },
    { title: "Hair Coloring", icon: "🎨" },
    { title: "Bridal & Party Makeup", icon: "💄" },
    { title: "Facials & Skincare", icon: "✨" },
    { title: "Manicure & Pedicure", icon: "💅" },
    { title: "Beard Grooming", icon: "🪒" },
    { title: "Hair Spa & Treatment", icon: "🧖‍♀️" },
    { title: "Waxing & Threading", icon: "🍯" },
  ];

  return (
    <section className="services" id="services">
      <div className="services__header">
        <h2 className="services__title">Our Premium Salon Services</h2>
        <p className="services__subtitle">
          From classic cuts to modern transformations, we provide world-class
          grooming and beauty services for everyone.
        </p>
      </div>

      <div className="services__container">
        {/* Left Side: Large Image */}
        <div className="services__image-wrapper">
          <img
            src={serviceImg}
            alt="Professional salon service"
            className="services__img"
          />
        </div>

        {/* Right Side: Grid of Cards */}
        <div className="services__grid">
          {serviceCards.map((service, index) => (
            <div key={index} className="service__card">
              <div className="service__icon">{service.icon}</div>
              <h3 className="service__card-title">{service.title}</h3>
              <p className="service__card-desc">
                Professional care for your unique style.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;