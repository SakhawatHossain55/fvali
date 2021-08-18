import Banner from "components/home/Banner/Banner";
import Products from "components/home/Products/Products";
import useAsync from "hooks/useAsync";
// import React, { useEffect, useState } from "react";
import ProductService from "services/ProductService";
// import { IProduct } from "types";

const Home = () => {
  // const [products, setProducts] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   ProductService.getProducts().then((res) => setProducts(res));
  // }, []);

  const { data, isLoading } = useAsync(ProductService.getProducts);

  return (
    <div>
      <Banner />
      <Products isLoading={isLoading} products={data} />
    </div>
  );
};

export default Home;
