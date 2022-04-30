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
        <h2>Our Products(Inventories)</h2>
      </div>
      <div className="service container">
        {service.slice(0,6).map((product) => (
          <ServiceDetails product={product}></ServiceDetails>
        ))}
      </div>
      <div className=" mx-auto d-flex justify-content-center">
        <button className="btnn text-center w-50 mx-auto mt-5 mb-5">
          See All
        </button>
      </div>
    </div>
  );
};

export default Services;
