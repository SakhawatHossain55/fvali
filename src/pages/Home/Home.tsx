import Banner from "components/home/Banner/Banner";
import Products from "components/home/Products/Products";
import ShopByStore from "components/home/ShopByStore";
import useAsync from "hooks/useAsync";
import React, { useEffect, useState } from "react";
import ProductService from "services/ProductService";
import StoreService from "services/StoreService";
import { IStore } from "types";
// import { IProduct } from "types";

const Home = () => {
  // const [products, setProducts] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   ProductService.getProducts().then((res) => setProducts(res));
  // }, []);

  const [storeData, setStoreData] = useState<IStore[]>([]);
  console.log(storeData);
  useEffect(() => {
    StoreService.getStores().then((res) => setStoreData(res));
  }, []);

  const { data, isLoading, isSuccess } = useAsync(ProductService.getProducts);
  console.log(data);

  return (
    <div>
      <Banner />
      <Products isSuccess={isSuccess} isLoading={isLoading} products={data} />
      <ShopByStore
        isSuccess={isSuccess}
        isLoading={isLoading}
        shopByStore={storeData}
      />
    </div>
  );
};

export default Home;
