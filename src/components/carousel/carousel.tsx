import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

const StyledSwiper = styled(Swiper)`
    width: 500px;

    .swiper-wrapper {
        padding-inline-start: 0;
    }
    .swiper-slide {
        list-style: none;
    }
    .swiper-pagination {
        bottom: 25px;
    }
`;

const Carousel: React.FC<SwiperOptions> = (props) => {
  const slides = [];

  for (let i = 0; i < 10; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img src={`https://picsum.photos/id/${i+ 1}/500/300`} alt={`Slide ${i}`} />
      </SwiperSlide>
    );

  }

  return (
    <StyledSwiper
      tag="section"
      wrapperTag="ul"
      {...props}
    >
      {slides}
    </StyledSwiper>
  );
};

export default Carousel;
