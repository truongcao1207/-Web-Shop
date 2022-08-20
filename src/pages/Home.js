import React from "react";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Products from "../components/Products/Products";

import Slider from "../components/Slider/Slider";
import ProductItem from "./ProductItem/ProductItem";
import ProductList from "./ProductList/ProductList";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
};

export default Home;
