import React from "react";
import "./TopDetails.css";
const TopDetails = ({ product }) => {
  const { name, image, supplierName, price, quantity, description } = product;
  return (
    <div className="mb-5 mt-5">
      <div className="sell ">
        <div>
          <img className="topImg" src={image} alt="" />
        </div>
        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TopDetails;
