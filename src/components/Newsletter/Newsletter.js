import { Send } from "@material-ui/icons";
import React from "react";
import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <div className="news-letter">
      <h1>Newsletter</h1>
      <div className="news-letter-desc">
        Get timely updates from your favorite products.
      </div>
      <div className="news-letter-input ">
        <input type="text" placeholder="Your email" />
        <button>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
