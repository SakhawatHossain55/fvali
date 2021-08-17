import Banner from "components/home/Banner/Banner";
import Products from "components/home/Products/Products";
// import { IProduct } from "Models/types";
// eslint-disable-next-line import/no-duplicates
import React, { useEffect } from "react";
// eslint-disable-next-line import/no-duplicates
import { useState } from "react";
// import ProductService from "services/ProductService";

const Home = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("https://fvaly.herokuapp.com/api/product")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
      });
    // ProductService.getProducts()
    // .then((res: React.SetStateAction<IProduct[]>) =>  setProduct(res))
  }, []);

  return (
    <div>
      <Banner />
      {console.log(product)}

      <Products />
    </div>
  );
};

export default Home;
