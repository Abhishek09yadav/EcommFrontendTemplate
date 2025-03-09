  "use client"
  import React from 'react'
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/css";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

  const Hero = () => {
    return (
      <div className="w-full h-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="w-full  h-[300px] sm:h-[400px] md:h-[500px] "
        >
          {["/img/b1.jpg", "/img/b2.jpg", "/img/b3.jpg"].map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`banner ${index + 1}`}
                layout="fill"
                objectFit="contain"
                className='w-full'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  export default Hero