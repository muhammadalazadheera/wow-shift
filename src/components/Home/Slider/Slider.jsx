import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import banner images
import banner1 from '../../../../public/assets/banner/banner1.png';
import banner2 from '../../../../public/assets/banner/banner2.png';
import banner3 from '../../../../public/assets/banner/banner3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css'

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='h-[70vh] mt-5 mb-10 rounded-2xl'>
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
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='rounded-2xl border border-black/10' src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded-2xl border border-black/10' src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded-2xl border border-black/10' src={banner3} alt="" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;