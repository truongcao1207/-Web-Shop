import { Add, Remove } from "@material-ui/icons";
import React from "react";
import Footer from "../../components/Footer/Footer";
import "./Cart.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from "../../redux/action";
const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const products = useSelector((product) => product.handleCart);
  console.log(products);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  const delProduct = (product) => {
    dispatch(delCart(product));
  };

  var total = 0;
  const itemList = (item) => {
    total = total + item.price * item.qty;
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="cart">
        <div className="cart-wrapper">
          <h1>YOUR BAG</h1>
          <div className="top">
            <div className="top-text">
              <span>Shopping Bag({state.length})</span>
            </div>
          </div>
          <div className="bot">
            <div className="bot-info">
              {products.map((product) => (
                <div className="bot-product">
                  <div className="bot-product-detail">
                    <img src={product.image} alt="" />
                    <div className="product-detail">
                      <span>
                        <b>Product:</b> {product.title}
                      </span>
                      <span>
                        <b>ID:</b> {product.id}
                      </span>
                    </div>
                    <div className="price-detail">
                      <div className="product-amount-container">
                        <Remove onClick={() => delProduct(product)} />
                        <div className="product-amount">{product.qty}</div>
                        <Add onClick={() => addProduct(product)} />
                      </div>
                      <div className="product-price">
                        ${product.qty * product.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="summary">
              {state.map(itemList)}
              <h1>CART</h1>
              <div className="summary-item">
                <span>Subtotal</span>
                <span>$ {total}</span>
              </div>
              <div className="summary-item">
                <span>Estimated Shipping</span>
                <span>$ 12.90</span>
              </div>
              <div className="summary-item">
                <span>Shipping Discount</span>
                <span>$ -12.90</span>
              </div>
              <div className="summary-item" type="total">
                <span>Total</span>
                <span>$ {total}</span>
              </div>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
