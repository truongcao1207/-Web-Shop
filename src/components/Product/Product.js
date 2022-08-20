import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Product = ({ item }) => {
  return (
    <div className="product" data-aos="zoom-in-up" data-aos-duration="1000">
      <img src={item.image} alt="" />
      <div className="product-info">
        {/* <div className="product-icon">
          <ShoppingCartOutlined onClick={handleClick} />
        </div> */}
        <div className="product-icon">
          <Link to={`/product/${item.id}`}>
            <SearchOutlined />
          </Link>
        </div>
        {/* <div className="product-icon">
          <FavoriteBorderOutlined />
        </div> */}
      </div>
      <div>
        <h3 style={{ paddingBottom: "10px" }}>{item.title}</h3>
        <span>Price: {item.price}$</span>
      </div>
    </div>
  );
};

export default Product;
