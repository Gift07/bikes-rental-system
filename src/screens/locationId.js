import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Matheus from "../images/matheus.jpg"
import { useParams } from 'react-router-dom'
import {IoIosArrowForward} from "react-icons/io"
import Card from '../components/Location/card'
import Navbar from '../components/navbar'
import Header from '../components/header'
import { Link } from 'react-router-dom'
import { fetchLocationId } from '../store/actions/location'

const LocationId = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const { is_loading, location, error } = useSelector(state => state.location)
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
  
  useEffect(() => {
       console.log("this useEffect")
        dispatch(fetchLocationId(params.id))
    }, [dispatch])
    
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
                    <div className='w-full h-64 md:h-96 lg:h-96 bg-yellow-300 rounded-md'>
                      {/* <img
                          className='w-full h-full object-cover'
                          src={location.location?.imageUrl} alt={location.location.name} /> */}
                    </div>
            </div>
            {/* lister */}
            <div className='w-full flex items-center justify-between px-4 pb-4 md:px-10 lg:px-20'>
                <p className='font-bold lg:font-bold text-sm lg:text-md'>
                    Available bikes
                </p>
                <p className='flex px-1 lg:px-2 py-1 text-sm lg:text-md bg-blue-600 rounded-full items-center justify-center'>
                    see all <IoIosArrowForward/>
                </p>
            </div>
            {/* bicycle list */}
            <div className='w-full hidden md:flex lg:flex items-center justify-center overflow-hidden py-10'>
                <div className='w-10/12 grid grid-cols-4 gap-4 items-center justify-center mb-4'>
                    {location.bikes.map((bike) => <Card bike={bike} name={location.location?.name} />)}
                </div>
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
              <div className='grid grid-cols-2 items-center justify-center gap-4 text-gray-900 mb-3'>
              {location.bikes.map(bike => (
                  <div style={{
                        width:"10rem"
                      }} className='h-72 rounded-lg bg-red-50'>
                          <div className='w-full flex items-center justify-center mt-2'>
                              <img
                                className='w-11/12 rounded-lg h-36 object-cover'
                                  src={bike.imageUrl} alt="" />
                          </div>
                            <div>
                                <p className='font-medium text-md px-2'>
                                    {bike.name}
                                </p>
                                <p className='font-medium text-md px-2'>
                                    {location.location?.name}
                                </p>
                                <p className='font-medium text-md px-2'>
                                  {bike.owner.username}
                                </p>
                            </div>
                            <div>
                            <div>
                              <p className='w-20 ml-2 flex items-center justify-center text-gray-50  bg-blue-600 text-sm rounded-lg'>
                                Available
                              </p>
                            </div>
                            </div>
                              <div className='w-full flex items-center justify-center mt-2'>
                                <Link to="/bike/rent">                                    
                                  <button className='px-3 py-1 rounded-md bg-green-500 font-medium  text-sm uppercase'>
                                    rent the bike
                                    </button>
                                  </Link>
                              </div>
                    </div> 
              ))}
              </div>              
            </div>
        </div>
          </div>
  )
}

export default LocationId