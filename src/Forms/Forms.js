import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../component/firebaseInit";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import MyItem from "../component/MyItem/MyItem";
import Hooks from "../Hooks/Hooks";
import { useAuthState } from "react-firebase-hooks/auth";
// import useServiceDetails from "../UseServiceDetails/UseServiceDetails";
import axios from "axios";
const Forms = ({ handelForm }) => {
  const [user] = useAuthState(auth);
  if (user) {
  }
  const [isReload, setIsReload] = useState(false);
  const { register, handleSubmit } = useForm();
  // const { id } = useParams();
  // const [services] = useServiceDetails(id);

  const onSubmit = (data, event) => {
    const url = `https://safe-atoll-27421.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        setIsReload(!isReload);
        if (result) {
          toast("Add Successful");
        }
      });
  };

  return (
    <div className="w-75 mx-auto">
      <ToastContainer />
      {/* <p className="text-center">ADD A SERVICE {services.length}</p> */}
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          name="photo"
          {...register("image")}
        />
        <input
          className="mb-2"
          placeholder="Name"
          name="name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          name="description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          name="price"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          name="quantity"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Supplier name"
          type="text"
          name="supplierName"
          {...register("supplierName")}
        />
        <input
          className="mb-2"
          placeholder="Email"
          type="email"
          value={user?.email}
          readOnly
          required
          disabled
          name="email"
          {...register("email")}
        />

        <input onClick={handelForm} type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default Forms;
