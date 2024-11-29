import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination, Autoplay } from "swiper/modules";
import carousel1 from "../../../assets/images/carousel1.svg";

const Carousel = () => {
  return (
    <section id="carousel" className="mt-8 sm:mt-12">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={carousel1} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
