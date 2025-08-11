"use client";

import { type FC } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

import "./RecordImgSlide.css";

const RecordImgSlideContainer: FC = () => {
  return (
    <Swiper
      pagination={{
        bulletClass: `swiper-pagination-bullet ${"music"}`,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="record-swiper"
    >
      <SwiperSlide>
        <div className="record-img-slide">
          <Image
            src={"/img/placeholder.png"}
            alt="placeholder"
            width={832}
            height={468}
            className="placeholder-image"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="record-img-slide">
          <Image
            src={"/img/placeholder.png"}
            alt="placeholder"
            width={832}
            height={468}
            className="placeholder-image"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="record-img-slide">
          <Image
            src={"/img/placeholder.png"}
            alt="placeholder"
            width={832}
            height={468}
            className="placeholder-image"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="record-img-slide">
          <Image
            src={"/img/placeholder.png"}
            alt="placeholder"
            width={832}
            height={468}
            className="placeholder-image"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="record-img-slide">
          <Image
            src={"/img/placeholder.png"}
            alt="placeholder"
            width={832}
            height={468}
            className="placeholder-image"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default RecordImgSlideContainer;
