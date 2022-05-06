import React from "react";

import "./Banner.css";
const Banner = () => {
  return (
    <div className="container">
      <h3 className="center">WE ARE PROVIDING BEST LAPTOP FOR YOUR STORE </h3>
      <img
        className="w-100"
        src={
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000"
        }
        alt=""
      />
    </div>
  );
};

export default Banner;
