import React, { useEffect, useState } from "react";
import TopDetails from "../TopDetails/TopDetails";

const TopSell = ({ product }) => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <div>
        <div className="container text-center mt-5 mb-5">
          <h2>Our Top Sell Products</h2>
        </div>
        <div className="service container">
          {service.slice(0, 3).map((product) => (
            <TopDetails product={product}></TopDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSell;
