import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="login">
        <div className="login-wrapper">
          <h1>SIGN IN</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>LOGIN</button>
            <a href="">DO NOT YOU REMEMBER THE PASSWORD?</a>
            <a href="">CREATE A NEW ACCOUNT</a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
