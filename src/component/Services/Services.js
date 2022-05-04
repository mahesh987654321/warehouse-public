import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hooks from "../../Hooks/Hooks";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import "./Service.css";
const Services = () => {
  const navigate = useNavigate();
  const handelBtn = (event) => {
    event.preventDefault();
    navigate("/all");
  };
  const [service] = Hooks();
  return (
    <div>
      <div className="container text-center">
        <h2>Our Products(Inventories)</h2>
      </div>
      <div className="service container">
        {service.slice(0, 6).map((product) => (
          <ServiceDetails key={product._id} product={product}></ServiceDetails>
        ))}
      </div>
      <div className=" mx-auto d-flex justify-content-center">
        <button
          onClick={handelBtn}
          className="btnn text-center w-50 mx-auto mt-5 mb-5"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Services;
