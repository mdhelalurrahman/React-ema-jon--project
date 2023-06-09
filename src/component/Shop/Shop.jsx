import React, {useEffect, useState} from "react";
import Product from "../Products/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProudcts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProudcts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id}
          product={product}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
      </div>
    </div>
  );
};

export default Shop;
