import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_1000,w_2000/v1668944315/putatoe/Swiper/beach-bag-essentials-honestly-wtf-2048-1536_y7lsma.webp"/>
        </SwiperSlide>
        <SwiperSlide width="100%" heigth="100%">
          <Image src="https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_1000,w_2000/v1668942342/putatoe/Swiper/photo-1583947215259-38e31be8751f_a2tajc.avif"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1668942212/putatoe/Swiper/photo-1517260739337-6799d239ce83_hflwkq.avif"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1668942186/putatoe/Swiper/photo-1612817288484-6f916006741a_yrs6ux.avif"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1668943995/putatoe/Swiper/article2-v3-01-01_trhh3s.png"></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
