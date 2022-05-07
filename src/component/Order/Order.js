// import axios from "axios";
// import React, { useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../firebaseInit";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
// import "./orderDetails.css";
// const Order = () => {
//   const [isReload, setIsReload] = useState(false);
//   const [user] = useAuthState(auth);
//   if (user) {
//     console.log(user);
//   }
//   const onHandelSubmit = (event, data) => {
//     event.preventDefault();
//     const order = {
//       name: event.target.name.value,
//       price: event.target.price.value,
//       quantity: event.target.quantity.value,
//       description: event.target.description.value,
//       supplierName: event.target.supplierName.value,
//       Image: event.target.image.value,
//       email: user.email,
//     };
//     axios.post("http://localhost:5000/order", order).then((res) => {
//       const { data } = res;
//       if (data.insertedId) {
//         toast("Inserted Id");
//       }
//       event.target.reset();
//     });
//     axios.post("http://localhost:5000/service", order).then((res) => {
//       const { data } = res;
//       if (data.insertedId) {
//         toast("Inserted Id");
//       }
//       event.target.reset();
//     });
//   };

//   return (
//     <div className="w-50 mx-auto ">
//       <ToastContainer />
//       <form onSubmit={onHandelSubmit}>
//         <input
//           className="order"
//           type="text"
//           name="name"
//           placeholder="Enter Name"
//         />
//         <input
//           className="order"
//           type="text"
//           name="image"
//           placeholder="Paste Image url"
//         />
//         <br />
//         <input
//           className="order"
//           type="number"
//           name="price"
//           placeholder="Enter Price"
//         />
//         <br />
//         <input
//           className="order"
//           type="number"
//           name="quantity"
//           placeholder="Enter Quantity"
//         />
//         <br />
//         <input
//           className="order"
//           type="text"
//           name="description"
//           placeholder="Enter Description"
//         />
//         <br />
//         <input
//           className="order"
//           type="text"
//           name="supplierName"
//           placeholder="Enter supplierName"
//         />
//         <br />
//         <input
//           className="order"
//           type="email"
//           name="email"
//           value={user?.email}
//         />
//         <br />
//         <input className="submit" type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// };

// export default Order;
// import axios from "axios";
// import React, { useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../firebaseInit";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
// import "./orderDetails.css";
// const Order = () => {
//   const [isReload, setIsReload] = useState(false);
//   const [user] = useAuthState(auth);
//   if (user) {
//     console.log(user);
//   }
//   const onHandelSubmit = (event, data) => {
//     event.preventDefault();
//     const order = {
//       name: event.target.name.value,
//       price: event.target.price.value,
//       quantity: event.target.quantity.value,
//       description: event.target.description.value,
//       supplierName: event.target.supplierName.value,
//       Image: event.target.image.value,
//       email: user.email,
//     };
//     axios.post("http://localhost:5000/order", order).then((res) => {
//       const { data } = res;
//       if (data.insertedId) {
//         toast("Inserted Id");
//       }
//       event.target.reset();
//     });
//     axios.post("http://localhost:5000/service", order).then((res) => {
//       const { data } = res;
//       if (data.insertedId) {
//         toast("Inserted Id");
//       }
//       event.target.reset();
//     });
//   };

//   return (
//     <div className="w-50 mx-auto ">
//       <ToastContainer />
//       <form onSubmit={onHandelSubmit}>
//         <input
//           className="order"
//           type="text"
//           name="name"
//           placeholder="Enter Name"
//         />
//         <input
//           className="order"
//           type="text"
//           name="image"
//           placeholder="Paste Image url"
//         />
//         <br />
//         <input
//           className="order"
//           type="number"
//           name="price"
//           placeholder="Enter Price"
//         />
//         <br />
//         <input
//           className="order"
//           type="number"
//           name="quantity"
//           placeholder="Enter Quantity"
//         />
//         <br />
//         <input
//           className="order"
//           type="text"
//           name="description"
//           placeholder="Enter Description"
//         />
//         <br />
//         <input
//           className="order"
//           type="text"
//           name="supplierName"
//           placeholder="Enter supplierName"
//         />
//         <br />
//         <input
//           className="order"
//           type="email"
//           name="email"
//           value={user?.email}
//         />
//         <br />
//         <input className="submit" type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// };

// export default Order;
import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebaseInit";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./orderDetails.css";
import { useForm } from "react-hook-form";
const Order = ({ handelForm }) => {
  const [isReload, setIsReload] = useState(false);

  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  if (user) {
    console.log(user);
  }
  // const onHandelSubmit = (event, data) => {
  //   event.preventDefault();
  //   const order = {
  //     name: event.target.name.value,
  //     price: event.target.price.value,
  //     quantity: event.target.quantity.value,
  //     description: event.target.description.value,
  //     supplierName: event.target.supplierName.value,
  //     Image: event.target.image.value,
  //     email: user.email,
  //   };
  //   axios.post("http://localhost:5000/order", order).then((res) => {
  //     const { data } = res;
  //     if (data.insertedId) {
  //       toast("Inserted Id");
  //     }
  //     event.target.reset();
  //   });
  //   axios.post("http://localhost:5000/service", order).then((res) => {
  //     const { data } = res;
  //     if (data.insertedId) {
  //       toast("Inserted Id");
  //     }
  //     event.target.reset();
  //   });
  // };
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
    const order = {
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      description: event.target.description.value,
      supplierName: event.target.supplierName.value,
      Image: event.target.image.value,
      email: user.email,
    };
    axios
      .post("https://safe-atoll-27421.herokuapp.com/order", order)
      .then((res) => {
        const { data } = res;
        if (data.insertedId) {
          toast("Inserted Id");
        }
        event.target.reset();
      });
  };
  return (
    <div className="w-50 mx-auto ">
      <ToastContainer />

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

export default Order;
