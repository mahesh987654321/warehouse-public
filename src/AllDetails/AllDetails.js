
import { useNavigate } from "react-router-dom";
import Hooks from "../Hooks/Hooks";
import "./AllDetails.css";
import "../Forms/Forms";
import "react-toastify/dist/ReactToastify.css";

import { Button, Card } from "react-bootstrap";
const { ToastContainer, toast } = require("react-toastify");
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
      const url = `https://safe-atoll-27421.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = service.filter((service) => service._id !== id);
          console.log(remaining);
          if (remaining) {
            toast("User deleted");
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
    <div className="grd">
      <ToastContainer />
      <Card style={{ width: "18rem" }}>
        <img class="card-img-top img-fluid" src={image} alt="" />
        <Card.Body>
          <Card.Title>
            {" "}
            <b>Name:</b> {name}
          </Card.Title>
          <Card.Text>
            {" "}
            <b>Supplier Name:</b> {supplierName}
          </Card.Text>
          <Card.Text>
            {" "}
            <b>Description:</b> {description}
          </Card.Text>
          <Card.Text>
            {" "}
            <b>Price:</b> {price}
          </Card.Text>
          <Card.Text>
            {" "}
            <b>Quantity:</b> {quantity}
          </Card.Text>
          <Card.Text>
            {" "}
            <b>Email:</b> {email}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
          <div className="d-flex justify-content-between clas">
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
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllDetails;
