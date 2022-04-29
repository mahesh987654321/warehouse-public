import React, { useEffect, useState } from "react";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import "./Service.css";
const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <div className="container text-center">
        <h2>Our Products</h2>
      </div>
      <div className="service container">
        {service.map((product) => (
          <ServiceDetails product={product}></ServiceDetails>
        ))}
      </div>
    </div>
  );
};

export default Services;
