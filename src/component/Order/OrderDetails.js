import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./orderDetails.css";
const OrderDetails = ({ order }) => {
  const { name, quantity, supplierName, price, email, _id } = order;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const url = `https://safe-atoll-27421.herokuapp.com/order`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, [order]);
  const handelDelete = (id) => {
    const sure = window.confirm("Are you sure eto confirm delete");
    if (sure) {
      const url = `https://safe-atoll-27421.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = orders.filter((order) => order._id !== id);
          console.log(remaining);
          if (data) {
          }
        });
    }

    const url = `https://safe-atoll-27421.herokuapp.com/service/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = orders.filter((order) => order._id !== id);
        console.log(remaining);
        if (data) {
        }
      });
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead></thead>
        <tbody>
          <tr>
            <th>Name: {name}</th>
            <th>Quantity: {quantity}</th>
            <th>SupplierName: {supplierName}</th>
            <th>Price: {price}</th>
            <th>Email: {email}</th>
            <div className="details">
              <button onClick={() => handelDelete(_id)}>Delete</button>
            </div>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default OrderDetails;
