import Product from "components/common/Product";
import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductSkeletiton from "skeletions/ProductsSkeletion";
import { IProduct } from "types";

interface IProp {
  products: IProduct[] | null;
  isLoading: boolean;
  isSuccess: boolean;
}

const Products = ({ products, isLoading, isSuccess }: IProp) => {
  return (
    <>
      <Container>
        <h2 className="mb-4">Latest Products</h2>
        {isLoading && <ProductSkeletiton />}
        {isSuccess && (
          <Row className="align-items-stretch">
            {products?.map((product: IProduct) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Products;
