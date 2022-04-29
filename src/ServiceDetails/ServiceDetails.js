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
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button onClick={"/login"} variant="primary">
                Go somewhere
              </Button>
            </Card.Body>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetails;
