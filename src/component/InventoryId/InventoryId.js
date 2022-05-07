import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Hooks from "../../Hooks/Hooks";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./Inventory.css";
import axios from "axios";
const InventoryId = () => {
  const [input, setInput] = useState(0);
  const [order, setOrder] = useState(0);
  const [update, setUpdate] = useState([]);
  const handelInput = (event) => {
    const newCart = [...update, inventory];
    if (inventory.quantity - update.length < 1) {
      toast("sold Out");
      return;
    }
    setUpdate(newCart);
  };

  const { id } = useParams();
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [update]);
  const handelForm = (event) => {
    event.preventDefault();
    setInput(input);
    const plus = parseInt(inventory.quantity);
    let quantity = parseInt(event.target.name.value) + parseInt(plus);

    let updateUser = { quantity };
    fetch(`http://localhost:5000/service/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser, order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("user Updated");
        event.target.reset();
      });
  };
  const handelUpdate = (event) => {
    // event.preventDefault();
    inventory.quantity = inventory.quantity - 1;
    setOrder(inventory.quantity);
    console.log(order);
  };
  return (
    <div>
      <div className="partClas container">
        <div className="container gridClas">
          <div className="flxCls mt-5">
            <img className="invClas" src={inventory.image} alt="" />
          </div>
          <div className="mt-5">
            <p>
              <b>Name : </b>
              {inventory.name}
            </p>
            <p>
              <b>Supplier Name : </b>
              {inventory.supplierName}
            </p>
            <p>
              <b>Price : </b>
              {inventory.price}
            </p>
            <p>
              <b>Quantity : </b>

              {inventory.quantity}
              <p>
                <b>Quantity After Delivary:</b>{" "}
              </p>
            </p>
            <p></p>
            <p>
              <b>Description : </b>
              {inventory.description}
            </p>
          </div>
        </div>
        <div className="scncCls mt-5 d-flex justify-content-around">
          <div className="">
            <p>Total Quantity Is: :{inventory.quantity}</p>

            <button onClick={() => handelUpdate()}>Dalevered</button>
          </div>

          <div>
            <p>TOTAL QUANTITY IS: {inventory.quantity - 1}</p>
            <Form onSubmit={handelForm}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>ENter Number Here</Form.Label>
                <Form.Control
                  onBlur={handelInput}
                  type="number"
                  placeholder="Enter Value"
                  name="name"
                />
              </Form.Group>
              <p>After Adding is:{inventory.quantity}</p>

              <p>
                Plus:
                {parseInt(inventory.quantity) + parseInt(input) - 1}
              </p>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default InventoryId;
