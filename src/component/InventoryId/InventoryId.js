import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

import "./Inventory.css";
const InventoryId = () => {
  const [input, setInput] = useState(0);
  const [update, setUpdate] = useState([]);
  const handelUpdate = (event) => {
    const newCart = [...update, inventory];
    if (inventory.quantity - update.length < 1) {
      alert("sold Out");
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
  }, [id]);
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
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("user Updated");
        event.target.reset();
        // if (data) {
        //   parseInt(inventory.quantity + parseInt(input));
        // }
        // if (data) {
        //   parseInt(inventory.quantity - parseInt(update.length));
        // }
      });
  };
  const handelInput = (event) => {
    // const plus = parseInt(inventory.quantity);
    let quantity = inventory.quantity - update.length;

    let updateUser = { quantity };
    setInput(event.target.value);
    fetch(`http://localhost:5000/service/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("user Updated");
        event.target.reset();
        // if (data) {
        //   parseInt(inventory.quantity + parseInt(input));
        // }
        // if (data) {
        //   parseInt(inventory.quantity - parseInt(update.length));
        // }
      });
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
              {parseInt(inventory.quantity) + parseInt(input) ||
                inventory.quantity - update.length}
              <p>
                <b>Quantity After Delivary:</b>{" "}
                {/* {inventory.quantity - update.length} */}
              </p>
            </p>
            <p>
              {/* <b>Quantity :{inventory.quantity} </b> */}
              {/* {inventory.quantity - update.length} */}
            </p>
            <p>
              <b>Description : </b>
              {inventory.description}
            </p>
          </div>
        </div>
        <div className="scncCls mt-5 d-flex justify-content-around">
          <div className="">
            <p>Total Quantity Is: :{inventory.quantity - update.length}</p>

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
                {/* <p> inventory {inventory.quantity - input - 1}</p> */}
              </p>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryId;
// import React, { useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import { useParams } from "react-router-dom";

// import "./Inventory.css";
// const InventoryId = () => {
//   const [input, setInput] = useState(0);
//   const [update, setUpdate] = useState([]);
//   const handelUpdate = (event) => {
//     const newCart = [...update, inventory];
//     if (inventory.quantity - update.length < 1) {
//       alert("sold Out");
//       return;
//     }
//     setUpdate(newCart);
//   };

//   const { id } = useParams();
//   const [inventory, setInventory] = useState({});

//   useEffect(() => {
//     fetch(`http://localhost:5000/service/${id}`)
//       .then((res) => res.json())
//       .then((data) => setInventory(data));
//   }, [id]);
//   const handelForm = (event) => {
//     event.preventDefault();
//     setInput(input);
//     const plus = parseInt(inventory.quantity);
//     let quantity = parseInt(event.target.name.value) + parseInt(plus);

//     let updateUser = { quantity };
//     fetch(`http://localhost:5000/service/${id}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(updateUser),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("success", data);
//         alert("user Updated");
//         event.target.reset();
//         if (data) {
//           parseInt(inventory.quantity + parseInt(input));
//         }
//         if (data) {
//           parseInt(inventory.quantity - parseInt(update.length));
//         }
//       });
//   };
//   const handelInput = (event) => {
//     setInput(event.target.value);
//   };
//   return (
//     <div>
//       <div className="partClas container">
//         <div className="container gridClas">
//           <div className="flxCls mt-5">
//             <img className="invClas" src={inventory.image} alt="" />
//           </div>
//           <div className="mt-5">
//             <p>
//               <b>Name : </b>
//               {inventory.name}
//             </p>
//             <p>
//               <b>Supplier Name : </b>
//               {inventory.supplierName}
//             </p>
//             <p>
//               <b>Price : </b>
//               {inventory.price}
//             </p>
//             <p>
//               <b>Quantity : </b>
//               {parseInt(inventory.quantity) + parseInt(input) ||
//                 inventory.quantity - update.length}
//               <p>
//                 <b>Quantity After Delivary:</b>{" "}
//                 {/* {inventory.quantity - update.length} */}
//               </p>
//             </p>
//             <p>
//               {/* <b>Quantity :{inventory.quantity} </b> */}
//               {/* {inventory.quantity - update.length} */}
//             </p>
//             <p>
//               <b>Description : </b>
//               {inventory.description}
//             </p>
//           </div>
//         </div>
//         <div className="scncCls mt-5 d-flex justify-content-around">
//           <div className="">
//             <p>Total Quantity Is: :{inventory.quantity - update.length}</p>

//             <button onClick={() => handelUpdate()}>Dalevered</button>
//           </div>

//           <div>
//             <p>TOTAL QUANTITY IS: {inventory.quantity - 1}</p>
//             <Form onSubmit={handelForm}>
//               <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>ENter Number Here</Form.Label>
//                 <Form.Control
//                   onBlur={handelInput}
//                   type="number"
//                   placeholder="Enter Value"
//                   name="name"
//                 />
//               </Form.Group>
//               <p>After Adding is:{inventory.quantity}</p>

//               <p>
//                 Plus:
//                 {parseInt(inventory.quantity) + parseInt(input) - 1}
//                 <p> inventory {inventory.quantity - input - 1}</p>
//               </p>
//               <Button variant="primary" type="submit">
//                 Submit
//               </Button>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InventoryId;
