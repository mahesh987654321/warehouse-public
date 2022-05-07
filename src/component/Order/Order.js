import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebaseInit";
import './orderDetails.css'
const Order = () => {
  const [user] = useAuthState(auth);
  if (user) {
    console.log(user);
  }
  const onHandelSubmit = (event) => {
    event.preventDefault();
    const order = {
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      description: event.target.description.value,
      supplierName: event.target.supplierName.value,
      email: user.email,
    };
    axios.post("http://localhost:5000/order", order).then((res) => {
      const { data } = res;
      if (data.insertedId) {
        alert("Inserted Id");
      }
      event.target.reset();
    });
  };

  return (
    <div className="w-50 mx-auto ">
      <form onSubmit={onHandelSubmit}>
        <input
          className="order"
          type="text"
          name="name"
          placeholder="Enter Name"
        />
        <br />
        <input
          className="order"
          type="number"
          name="price"
          placeholder="Enter Price"
        />
        <br />
        <input
          className="order"
          type="number"
          name="quantity"
          placeholder="Enter Quantity"
        />
        <br />
        <input
          className="order"
          type="text"
          name="description"
          placeholder="Enter Description"
        />
        <br />
        <input
          className="order"
          type="text"
          name="supplierName"
          placeholder="Enter supplierName"
        />
        <br />
        <input
          className="order"
          type="email"
          name="email"
          value={user?.email}
        />
        <br />
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Order;
