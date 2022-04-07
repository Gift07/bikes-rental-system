import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, { Navigation } from "swiper/core";
import Card from "./card";
import Matheus from '../../images/matheus.jpg'
import { Link } from 'react-router-dom';

// install Swiper modules
SwiperCore.use([Navigation]);

const Locations = ({ locations, is_loading, error }) => {
  return (
            <div className="w-full md:px-10 lg:px-20 bg-black py-5 flex flex-col">
                {/* lister */}
                <div className="w-full px-4 flex items-center justify-between my-4">
                    <p className="font-bold text-md lg:text-xl">
                        Rental locations
                    </p>
                    <p className='flex px-1 lg:px-2 py-1 bg-blue-600  text-xs rounded-full items-center justify-center'>
                        see all<IoIosArrowForward/>
                    </p>
                </div>
                {/* single locaation box*/}
                <div className="w-full md:px-8 lg:px-20 hidden md:flex lg:flex items-center justify-center">
                    {is_loading ? (<div>
                        Loading...
                    </div>) : error ? (<div>
                        error.message
                  </div>) : (
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={2}
                            navigation
                            breakpoints={{
                            420:{
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                            2560: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                            }}
                            isBeginning={false}
                            >
                              {locations.map(location => (
                                    <SwiperSlide key={location._id}>
                                        <Card location={location} />
                                    </SwiperSlide>                                   
                                ))}
                        </Swiper>      
                    )}
                </div>
                <div className='w-screen h-full lg:hidden md:hidden flex items-center justify-center'>
                    <div className='grid grid-cols-2 gap-4 my-3 items-start justify-center'>
                        {locations.map(location => (
                            <div style={{
                                width:"10rem"
                            }} className='h-72 rounded-lg'>
                                <div>
                                    <img
                                        className='w-full rounded-lg h-48 object-cover border border-purple-700'
                                        src={Matheus} alt="" />
                                </div>
                                <div>
                                    <p className='font-light text-lg px-2'>
                                        {location.name}
                                    </p>
                                </div>
                                <div>
                                    <p className='font-light text-xs px-2'>
                                        50 bikes
                                    </p>
                                </div>
                                <div className='w-full flex items-center justify-center mt-2'>
                                    <Link to={`/rental-location/${location._id}`}>                                    
                                        <button className='px-3 py-1 rounded-md bg-purple-600'>
                                            View location
                                        </button>
                                    </Link>
                                </div>
                            </div>                  
                        ))}
                    </div>
                </div>
            </div>
  )
}

export default Locations