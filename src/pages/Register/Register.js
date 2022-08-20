import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Register.scss";

const Register = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="register">
        <div className="register-wrapper ">
          <h1></h1>
          <form>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="last name" />
            <input type="text" placeholder="username" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="password" />
            <input type="text" placeholder="confirm password" />
            <span>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button>CREATE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
