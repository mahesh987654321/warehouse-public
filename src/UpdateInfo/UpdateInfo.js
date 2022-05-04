import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../component/InventoryId/Inventory.css";
const UpdateInfo = () => {
  const { id } = useParams();

  const [inventory, setInventory] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [id]);
  return (
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
          </p>
          <p>
            <b>Description : </b>
            {inventory.description}
          </p>
        </div>
      </div>
      <div className="scncCls mt-5">
        <p>Total Quantity is: {inventory.quantity}</p>

        <button>Dalevered</button>
      </div>
    </div>
  );
};

export default UpdateInfo;
