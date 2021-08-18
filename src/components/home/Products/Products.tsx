import Product from "components/common/Product/Product";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { IProduct } from "types";

interface IProps {
  products: IProduct[];
}

const Products = ({ products }: IProps) => {
  console.log(products);

  return (
    <div className="my-5">
      <Container>
        <h2 className="mb-4">Latest Products</h2>
        <Row>
          {products?.map((product: IProduct) => (
            <Product product={product} key={product._id} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
