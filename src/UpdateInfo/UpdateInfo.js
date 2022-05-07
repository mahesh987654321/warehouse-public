import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../component/InventoryId/Inventory.css";
import InventoryId from "../component/InventoryId/InventoryId";
const UpdateInfo = () => {
  const { id } = useParams();

  const [inventory, setInventory] = useState({});
  useEffect(() => {
    fetch(`https://safe-atoll-27421.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [id]);
  return (
    <div className="partClas container">
      }<InventoryId></InventoryId>
    </div>
  );
};

export default UpdateInfo;
