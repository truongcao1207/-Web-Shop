import React from "react";
import "./Navbar.scss";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <span className="language">EN</span>
          <div className="search-container">
            <input type="text" placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="center">
          <Link to="/">
            <h1>SHOPP</h1>
          </Link>
        </div>
        <div className="right">
          <Link to="/register">
            <div className="menu-item ">REGISTER</div>
          </Link>
          <Link to="/login">
            <div className="menu-item ">SIGN IN</div>
          </Link>
          <Link to="/cart">
            <div className="menu-item ">
              <Badge
                badgeContent={state.length}
                overlap="rectangular"
                color="secondary"
              >
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
