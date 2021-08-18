import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IProduct } from "types";
import imageUrlParser from "utils/imageUrlParser";

interface IProps {
  product: IProduct;
}

// const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL

const Product = ({ product }: IProps) => {
  console.log(product);

  const { name, image, _id } = product;

  return (
    <Col md={3} className="mb-3">
      <Link to={`/product/${_id}`}>
        <Card>
          <Card.Img variant="top" src={imageUrlParser(image)} />
          <Card.Body>
            <Card>{name}</Card>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Product;
