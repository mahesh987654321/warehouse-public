// // import Hooks from "../Hooks/Hooks";
// import { useNavigate } from "react-router-dom";
// import Hooks from "../Hooks/Hooks";
// import "./AllDetails.css";
// const { ToastContainer } = require("react-toastify");
// const AllDetails = ({ product, handelbtn }) => {
//   const navigate = useNavigate();
//   const {
//     name,
//     image,
//     supplierName,
//     price,
//     quantity,
//     description,
//     _id,
//     email,
//   } = product;
//   const [service, setService] = Hooks();
//   const handelClk = (id) => {
//     console.log("clk");
//     const sure = window.confirm("Are you sure eto confirm delete");
//     if (sure) {
//       const url = `http://localhost:5000/service/${id}`;
//       fetch(url, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           const remaining = service.filter((service) => service._id !== id);
//           console.log(remaining);
//           if (data) {

//           }
//         });
//     }
//   };
//   const handelUpdate = (id) => {
//     navigate(`/update/${id}`);
//   };
//   return (
//     <div>
//       <div className="max">
//         <div>
//           <img className="images" src={image} alt="" />
//         </div>
//         <div>
//           <div>
//             <div>
//               <p>Name: {name}</p>
//               <p>SupplierName: {supplierName}</p>
//               <p>Price: {price}</p>
//               <p>Quantity: {quantity}</p>
//               <p>Quantity: {email}</p>
//               <p>Description: {description}</p>
//             </div>
//           </div>
//           <div className="d-flex justify-content-between">
//             <button onClick={handelbtn} className="allBtn">
//               ADD TO CART
//             </button>
//             <button onClick={() => handelClk(product._id)} className="allBtn">
//               Delete
//             </button>
//             <button onClick={() => handelUpdate(_id)} className="allBtn">
//               Update Stock
//             </button>
//             <button onClick={() => handelUpdate(_id)} className="allBtn">
//               Update Stock
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllDetails;

// ***************************

// import Hooks from "../Hooks/Hooks";
import { useNavigate } from "react-router-dom";
import Hooks from "../Hooks/Hooks";
import "./AllDetails.css";
import "../Forms/Forms";
const { ToastContainer } = require("react-toastify");
const AllDetails = ({ product, handelbtn }) => {
  const navigate = useNavigate();
  const {
    name,
    image,
    supplierName,
    price,
    quantity,
    description,
    _id,
    email,
  } = product;
  const [service, setService] = Hooks();

  const handelClk = (id) => {
    console.log("clk");
    const sure = window.confirm("Are you sure eto confirm delete");
    if (sure) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = service.filter((service) => service._id !== id);
          console.log(remaining);
          if (data) {
          }
        });
    }
  };
  const handelUpdate = (id) => {
    navigate(`/update/${id}`);
  };
  const handelNew = (id) => {
    navigate(`/service`);
  };
  return (
    <div>
      <div className="max">
        <div>
          <img className="images" src={image} alt="" />
        </div>
        <div>
          <div>
            <div>
              <p>Name: {name}</p>
              <p>SupplierName: {supplierName}</p>
              <p>Price: {price}</p>
              <p>Quantity: {quantity}</p>
              <p>Quantity: {email}</p>
              <p>Description: {description}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button onClick={() => handelbtn(_id)} className="allBtn">
              ADD TO CART
            </button>
            <button onClick={() => handelClk(product._id)} className="allBtn">
              Delete
            </button>
            <button onClick={() => handelUpdate(_id)} className="allBtn">
              Update Stock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDetails;
