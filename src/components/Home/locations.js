import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import Card from "./card";

const Locations = () => {
  return (
            <div className="w-full px-20 bg-black py-5 flex flex-col">
                {/* lister */}
                <div className="w-full flex items-center justify-between my-4">
                    <p className="font-bold text-xl">
                        Rental locations
                    </p>
                    <p className='flex px-2 py-1 bg-blue-600 rounded-full items-center justify-center'>
                        see all<IoIosArrowForward/>
                    </p>
                </div>
                {/* single locaation box*/}
                <div className="w-full px-20 flex items-center justify-center">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={5}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={swiper => console.log(swiper)}
                        >
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
  )
}

export default Locations