// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const MyItem = () => {
//   const [orders, setOrders] = useState([]);
//   useEffect(() => {
//     const getOrders = async () => {
//       const url = `http://localhost:5000/order`;
//       const { data } = await axios.get(url);
//       setOrders(data);
//     };
//     getOrders();
//   }, []);
//   return <div>Yours Orders: {orders.length}</div>;
// };

// export default MyItem;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebaseInit";
import MyDetails from "../MyDetails/MyDetails";
const MyItem = () => {
  const [order, setOrder] = useState([]);
  console.log(order);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/my?email=${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setOrder(data);
    };
    getOrders();
  }, [user]);
  return (
    <div>
      {order.map((product) => (
        <MyDetails product={product} key={product._id}></MyDetails>
      ))}
    </div>
  );
};

export default MyItem;
