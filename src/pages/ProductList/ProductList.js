import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./ProductList.scss";
import axios from "axios";
import Product from "../../components/Product/Product";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        if (res && res.data) setData(res?.data);
        setFilter(res.data);
      })
      .then((error) => {
        console.log(error);
      });
  }, [0]);

  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };
  return (
    <div className="product-list">
      <Navbar />
      <h1></h1>
      <div className="product-list-filter">
        <div className="list-filter">
          <span>Category:</span>
          <button onClick={() => setFilter(data)} value="" key="">
            All
          </button>
          <button onClick={() => filterProduct("electronics")}>
            Electronics
          </button>
          <button onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button onClick={() => filterProduct("men's clothing")}>
            Men's clothing
          </button>
          <button onClick={() => filterProduct("women's clothing")}>
            Women's clothing"
          </button>
        </div>
      </div>
      <div className="products">
        {filter.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
