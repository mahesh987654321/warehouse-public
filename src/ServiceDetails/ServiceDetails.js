import React from "react";
import { Button, Card } from "react-bootstrap";

const ServiceDetails = ({ product }) => {
  const { name, image, supplierName, price, quantity, description } = product;
  return (
    <div>
      <div className="container all mt-5 mb-5">
        <Card className="details">
          <div className="cardImg">
            <Card.Img className="" variant="top" src={image} />
          </div>

          <div>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <p>{description}</p>
                <p>
                  <b> Supplier:</b> {supplierName}
                </p>
                <p>
                  <b>Price: </b>
                  {price}
                </p>
                <p>
                  <b>Quantity: {quantity}</b>
                </p>
              </Card.Text>
              <Button onClick={"/login"} variant="primary">
                UPDATE STOCK
              </Button>
            </Card.Body>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetails;
