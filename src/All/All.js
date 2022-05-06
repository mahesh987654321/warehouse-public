import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AllDetails from "../AllDetails/AllDetails";
import Forms from "../Forms/Forms";

import "./All.css";
const All = ({ _id }) => {
  const [cart, setCart] = useState([]);
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [service]);
  const handelbtn = (event) => {
    const newCart = [...cart, event];
    setCart(newCart);
  };
  const navigate = useNavigate();
  const handelNew = (id) => {
    navigate(`/service`);
  };
  const handelOrder = (id) => {
    console.log(id);
    navigate(`/order`);
  };
  return (
    <div>
      {/* <button onClick={() => handelNew()} className="allBtn">
        Add new
      </button> */}
      <button onClick={() => handelOrder()} className="allBtn">
        Add order
      </button>
      <div className="part">
        <div className="many">
          {service.map((product) => (
            <AllDetails
              product={product}
              key={product._id}
              handelbtn={handelbtn}
            ></AllDetails>
          ))}
        </div>
        <div className="second">
          <p className="p">Hay this is mahesh</p>
          <p>Product Is :{service.length}</p>
          <p>Total product is: {service.length}</p>
          <p className="text-black">Add item: {cart.length}</p>
          <p>In your Stock: {service.length - cart.length}</p>

          <Forms></Forms>
        </div>
      </div>
    </div>
  );
};

export default All;
