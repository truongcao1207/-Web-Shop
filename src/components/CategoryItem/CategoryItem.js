import React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.scss";
const CategoryItem = ({ item }) => {
  return (
    <div className="category-item ">
      <img src={item.img} alt="" />
      <div className="category-info">
        <h1>{item.title}</h1>
        <Link to="/products">
          <button className="btn-animate">
            <p>SHOW NOW</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
