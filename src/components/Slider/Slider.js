import React from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <Swiper grabCursor={true} spaceBetween={50} slidesPerView={"auto"}>
      <SwiperSlide>
        <div className="hero">
          <div className="hero-img">
            <img
              src="https://images.unsplash.com/photo-1612096536102-93f503aa2419?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG1vZGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="hero-info">
            <h1>WINTER COLLECTION</h1>
            <p>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
            <Link to="/products">
              <button className="btn-animate">
                <p>SHOW NOW</p>
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero">
          <div className="hero-img">
            <img
              src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWxzJTIwYXV0dW1ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="hero-info">
            <h1>AUTUMN COLLECTION</h1>
            <p>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
            <Link to="/products">
              <button className="btn-animate">
                <p>SHOW NOW</p>
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero">
          <div className="hero-img">
            <img
              src="https://images.unsplash.com/photo-1482555670981-4de159d8553b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVscyUyMHN1bW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="hero-info">
            <h1>SUMMER SALE</h1>
            <p>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
            <Link to="/products">
              <button className="btn-animate">
                <p>SHOW NOW</p>
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
