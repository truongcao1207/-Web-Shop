import React from "react";
import "./Categories.scss";
import { categories } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { v4 } from "uuid";

const Categories = () => {
  return (
    <Swiper
      grabCursor={true}
      watchSlidesProgress={true}
      slidesPerView={3}
      className="mySwiper"
    >
      <div className="categories">
        {categories.map((item) => (
          <SwiperSlide>
            <CategoryItem item={item} key={v4()} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default Categories;
