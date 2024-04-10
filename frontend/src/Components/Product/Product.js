import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./Product.css";

const Product = ({ product }) => {
  const image = product.attributes.images.data[0].attributes;

  return (
    <Card className="product-card">
      <CardImg
        top
        width="100%"
        src={`http://localhost:1337${image.url}`}
        alt={image.name}
      />
    <CardBody className="custom-card-body">
        <CardTitle>{product.attributes.name}</CardTitle>
        <CardSubtitle>
          <strong>Price: £{product.attributes.price}</strong>
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default Product;
