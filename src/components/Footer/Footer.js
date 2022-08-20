import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left ">
        <h1>SHOPP</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="social-container ">
          <div className="social-icon ">
            <Facebook />
          </div>
          <div className="social-icon ">
            <Instagram />
          </div>
          <div className="social-icon ">
            <Twitter />
          </div>
          <div className="social-icon ">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="footer-center ">
        <h3>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Terms</li>
          <li>More</li>
        </ul>
      </div>
      <div className="footer-right ">
        <h3>Contact</h3>
        <div className="contact-item ">
          <Room style={{ marginRight: "10px" }} /> 284 Ly Thuong Kiet, District
          10, HCM
        </div>
        <div className="contact-item ">
          <Phone style={{ marginRight: "10px" }} /> +84966740680
        </div>
        <div className="contact-item ">
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          truongcao1207@gmail.com
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
