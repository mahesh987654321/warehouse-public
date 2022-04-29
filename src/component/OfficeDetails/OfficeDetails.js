import React from "react";
import "./OfficeDetails.css";
const OfficeDetails = () => {
  return (
    <div>
      <h1 className="text-center">Something about us</h1>
      <div className="office container mb-5 mt-5">
        <div>
          <img
            src={
              "https://compass-ssl.microsoft.com/assets/f9/4c/f94c2916-6a4e-4cbc-9bc1-9f0e0f4ee46c.png?n=ioc_home_bottomleft_4up_491x276.png"
            }
            alt=""
          />
        </div>
        <div>
          <p>
            And we’re not alone. Last year, 80% of Americans shopped online at
            least monthly, and 5% were shopping online daily, Big Commerce
            reported. For many of us, online shopping has become a routine part
            of daily life, with huge impact on a global scale. Global ecommerce
            sales have skyrocketed over the last four years: According to
            Statista, in 2014, annual online sales totalled $1.3 billion USD
            worldwide; by last year, they’d doubled to $2.8 billion; and by
            2021, they’re expected to nearly double again to $4.48 billion.
            That’s 17.5% of retail sales worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfficeDetails;
