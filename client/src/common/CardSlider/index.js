import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/swiper.min.css";

import Card from "../Card";

const CardSlider = ({ stadiums }) => {
  const [cards, setCards] = useState(stadiums);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const slidesToShow = 3;
  SwiperCore.use([Autoplay, Navigation]);
  return (
    <div
      style={{
        position: "relative",
        minHeight: 100,
        marginTop: 32,
      }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesToShow}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        loop={true}
        autoplay
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        style={{ position: "unset" }}
      >
        {cards.map((card, i) => (
          <SwiperSlide key={i}>
            <Card {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
