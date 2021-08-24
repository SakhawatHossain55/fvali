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

  const { data, isLoading, isSuccess } = useAsync(ProductService.getProducts);
  console.log(data);

  return (
    <div>
      <Banner />
      <Products isSuccess={isSuccess} isLoading={isLoading} products={data} />
    </div>
  );
};

export default Home;
