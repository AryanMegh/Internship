import React from "react";
import "../../assets/CSS/Pricing_page_style.css";

const Pricing = () => {
  const prices = [
    { name: "Regular Haircut", price: "$34" },
    { name: "Royal Shave", price: "$27" },
    { name: "Haircut + Royal shave", price: "$67" },
    { name: "Haircut + Beard Trim", price: "$34" },
    { name: "Beard Trim Machine", price: "$28" },
    { name: "Golden Facial", price: "$34" },
    { name: "Supreme Massage", price: "$44" },
    { name: "Royal Hair Cutting", price: "$87" },
  ];

  return (
    <section className="pricing section" id="pricing">
      <h2 className="pricing__title">Our Pricing</h2>

      <div className="pricing__container container grid">
        {prices.map((item, index) => (
          <div key={index} className="pricing__item">
            <div className="pricing__data">
              <h3 className="pricing__name">{item.name}</h3>
              <span className="pricing__price">{item.price}</span>
            </div>
            <div className="pricing__line"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;