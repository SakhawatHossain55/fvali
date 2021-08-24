import StorProduct from "components/common/StorProduct";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { IStore } from "types";

interface IProp {
  shopByStore: IStore[] | null;
  isLoading: boolean;
  isSuccess: boolean;
}

const ShopByStore = ({ shopByStore, isLoading, isSuccess }: IProp) => {
  console.log(shopByStore);

  return (
    <div>
      <Container>
        <h1 className="my-5">Shop by Stores</h1>
        {isLoading && <h3>Loadding....</h3>}
        {isSuccess && (
          <Row className="align-items-stretch">
            {shopByStore?.map((storeProduct: IStore) => (
              <StorProduct key={storeProduct._id} storeProduct={storeProduct} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ShopByStore;
