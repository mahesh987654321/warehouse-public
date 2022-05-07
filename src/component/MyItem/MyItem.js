import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../firebaseInit";
import OrderDetails from "../Order/OrderDetails";

const MyItem = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/order?email=${email}`;
      const { data } = await axios.get(url);
      setOrder(data);
    };
    getOrders();
  }, [user, order]);

  return (
    <div>
      {order.map((order) => (
        <OrderDetails order={order}></OrderDetails>
      ))}
    </div>
  );
};

export default MyItem;
