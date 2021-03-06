import React, { useState, useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { Link,Navigate } from 'react-router-dom'
import bike3 from "../images/bike3.jpg"
import Map from '../components/cart/map'
import { fetchUserLocation } from "../store/actions/map"
import Checkout from "./checkout"
import { rentBike } from "../store/actions/rent"
import {rentTheBike} from "../store/actions/bikes"

import "../layout.scss"
import { createMyRent } from '../store/actions/myrents'

const Cart = () => {
    const dispatch = useDispatch()
    const { lat, long } = useSelector(state => state.map)
    const { username,userId } = useSelector(state => state.auth)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartItems')))

    const bike = cart.bikeId._id
    const location = cart.bikeLocation[0].locationId
    const owner = cart.bikeId.owner._id

    useEffect(() => {
        dispatch(fetchUserLocation())
        setCart(JSON.parse(localStorage.getItem('cartItems')))
    }, [dispatch])

    const handleClick = () => {
        dispatch(rentBike({ bike, location, owner, renter: userId })) 
        dispatch(createMyRent({ bike, location, user: userId }))
        dispatch(rentTheBike(bike))
        alert("Thank you for renting check your profile to time taken")
        localStorage.removeItem("cart")
        window.location.reload()
    }
    
    return (
      <div className="relative w-screen min-h-screen bg-black ">
        <div className='w-full h-auto bg-black text-gray-50 font-gotham absolute'>
            <div className='w-full flex items-center'>
                <Link to="/">                 
                    <p className='px-2 py-1 bg-blue-500 mt-3 rounded-full ml-4'>
                        go back
                    </p>
                </Link>
            </div>
            <div className='w-full flex items-center justify-between px-3 lg:px-20'>
                <div className='flex flex-col py-2 lg:py-4'>
                        <p className='font-light text-xl lg:text-3xl'>
                            Hello,{username}
                        </p>
                        <p className='font-bold text-lg lg:text-3xl'>
                            Complete your transaction to travel safe with us!
                        </p>
                </div>
            </div>
            <div className='w-full h-full flex items-center justify-center'>
                <div 
                    className=' w-11/12 md:w-10/12 lg:w-9/12 glass mt-4 rounded-lg h-130 md:h-128 lg:h-128 flex flex-col md:grid md:grid-cols-3  lg:grid grid-cols-3 lg:items-center lg:justify-center'>
                    <div className='md:col-span-2 lg:col-span-2 lg:h-128  lg:w-full rounded-l-lg'>
                        <Map lat={ lat} long={long} />
                    </div>
                    <div className='md:col-span-1 lg:col-span-1 h-full rounded-r-lg flex flex-col'>
                        <div className=' h-40 flex items-center justify-center'>
                            <img
                                className=' w-full lg:w-11/12 lg:rounded-lg h-full object-cover lg:mt-4'
                                src={cart.bikeId.imageUrl} alt="bike" />
                        </div>
                        {/* travel information */}
                        <div className='w-full h-full'>
                            <div className='px-4 lg:pt-4'>
                                <p className=' flex items-center'>
                                        from : <p className='px-2 py-1 rounded-lg bg-green-400 ml-4'>{ cart.bikeLocation[0].locationName}</p>
                                </p>
                                {/* <p
                                 className=' flex items-center mt-2'>
                                        Estimated time :
                                    <p className='px-2 py-1 rounded-lg text-gray-50 ml-4'>
                                        <div classsName ="flex items-center justify-center">
                                                <select onChange={(e) => {
                                                    setSelected(e.target.value)
                                                    console.log(selected)
                                                }}
                                                    className="text-gray-900">
                                                <option value={null}>set your time</option>
                                            {routeTime.map(route => (
                                                <option key={route.time} value={route}>{route.time}hr</option>
                                            ))}
                                          </select>
                                        </div>          
                                     </p>
                                </p> */}
                                {/* <p className=' flex items-center text-lg font-medium mt-2'>
                                        {price}<p className='font-bold'>Tzs</p>
                                </p> */}
                                <div className='w-full flex items-center justify-center mt-2 lg:mt-6'>
                                    <button
                                        onClick={handleClick}
                                        className='bg-green-500 px-12 uppercase rounded-lg hover:bg-green-400 py-2 mb-2'>
                                        rent the bike
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Cart