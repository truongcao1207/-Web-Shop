import React from "react";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import ProductItem from "./pages/ProductItem/ProductItem";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <ProductItem />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
