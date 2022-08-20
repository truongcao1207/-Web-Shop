import { Add, Remove } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import { addCart, delCart } from "../../redux/action";
import "./ProductItem.scss";
const ProductItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="product-item-wrapper">
        <div className="product-item-img">
          <img src={product.image} alt="" />
        </div>
        <div className="product-item-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <span>{product.price}$</span>
          <div className="add">
            <button onClick={() => addProduct(product)}>ADD TO CART</button>
            <Link to="/cart">
              <button>GO TO CART</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductItem;
