import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Matheus from "../images/matheus.jpg"
import {IoIosArrowForward} from "react-icons/io"
import Card from '../components/Location/card'
import bike1 from "../images/bike1.jpg"
import bike2 from "../images/bike2.jpg"
import bike3 from "../images/bike3.jpg"
import bike4 from "../images/bike4.jfif"
import bike5 from "../images/bike5.jpg"
import Navbar from '../components/navbar'
import Header from '../components/header'

const LocationId = () => {
    const bikes = [
        {
            name: "bike1",
            location: "kimara",
            imageUrl: bike1,
            owner:"Gift Edward",
            available:true
        },
        {
            name: "bike2",
            location: "kimara",
            imageUrl: bike2,
            owner:"Gift Edward",
            available:true
        },
        {
            name: "bike3",
            location: "kimara",
            imageUrl: bike3,
            owner:"Gift Edward",
            available:true
        },
        {
            name: "bike4",
            location: "kimara",
            imageUrl: bike4,
            owner:"Gift Edward",
            available:true
        },
        {
            name: "bike5",
            location: "kimara",
            imageUrl: bike5,
            owner:"Gift Edward",
            available:true
        },
    ]
    const [navScroll, setNavScroll] = useState(false)
    
    useEffect(() => {
        window.onscroll = () => {
          if (window.scrollY <= 20) {
            setNavScroll(false);
          } else {
            setNavScroll(true);
          }
        };
    }, []);
    const {username,is_authenticated} = useSelector(state => state.auth)
  return (
      <div className='w-screen min-h-screen bg-black overflow-hidden text-gray-50 font-gotham'>
            <Navbar
                navScroll={navScroll}
                username={username}
                is_authenticated={is_authenticated} 
            />
          {/* top area */}
          <div className='relative top-14'>
            <Header
                    navScroll={navScroll}
                    username={username}
                    is_authenticated={is_authenticated} />
            {/* map with kimara station */}
            <div className='w-full flex items-center justify-center py-10'>
                    <div className='w-10/12 h-96 bg-yellow-300 rounded-md'>

                    </div>
            </div>
            {/* lister */}
            <div className='w-full flex items-center justify-between px-20'>
                <p className='font-bold text-md'>
                    Available bikes
                </p>
                <p className='flex px-2 py-1 bg-blue-600 rounded-full items-center justify-center'>
                    see all <IoIosArrowForward/>
                </p>
            </div>
            {/* bicycle list */}
            <div className='w-full flex items-center justify-center overflow-hidden py-10'>
                <div className='w-10/12 grid grid-cols-4 gap-4 items-center justify-center'>
                    {bikes.map((bike) => <Card bike={bike} />)}
                </div>
            </div>
        </div>
          </div>
  )
}

export default LocationId