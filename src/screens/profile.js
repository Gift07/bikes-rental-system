import React, { useState,useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import Navbar from "../components/navbar"
import { loadUser } from "../store/actions/auth"
import "../layout.scss"
import { fetchRent } from '../store/actions/rent'
import { NavLink, Outlet } from "react-router-dom"
import Checkout from "../screens/checkout"
import {fetchMyRents} from '../store/actions/myrents'

const Profile = () => {
  const { firstname, email, user_role, userId } = useSelector(state => state.auth)
  const { locations } = useSelector(state => state.location)
  const [checkout, setCheckout] = useState(false)

  console.log(locations[0])
  console.log(userId)
  // console.log(locations[1].owner === userId)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
    dispatch(fetchRent())
    dispatch(fetchMyRents())
  }, [dispatch])
  
  return (
    <div className="w-screen min-h-screen bg-black font-gotham text-gray-50 relative">
      <div className="absolute w-full flex items-center justidy-center">
          <Navbar />
          <div className="w-full h-full px-3 md:px-10 lg:px-20 flex flex-col justify-center items-center relative top-14">
            <div className="flex justify-center">          
              {/* user information */}
                <div className="mr-4 w-16 h-16 lg:w-28 lg:h-28 rounded-full flex items-center justify-center bg-gray-600 text-3xl">
                {firstname.charAt(0).toUpperCase()}
                </div>
                <div className="overflow-hidden ml-4 mt-2">
                  <p className="text-lg font-bold pt-1">
                    {firstname}
                  </p>
                  <p className="text-xs font-light pt-1">
                    Dar es salaam,Tanzania
                  </p>
                  <p className="text-xs font-light pt-1">
                    {email}
                  </p>
                </div>
            </div>
            <div className="w-full flex items-center justify-center py-4">
            <ul className="flex items-center justify-center gap-x-5">
              {user_role === "STAFF" && (
              <NavLink to="/profile/add-bike">
                <li>Add Bike</li>
              </NavLink>
                )}
              {user_role === "STAFF" ? (
                <NavLink to="/profile/rent-bike">
                  <li>Rent</li>
                </NavLink>
                ) : (
                    <NavLink to="/profile/rented-bikes">
                      <li>Rented bikes</li>
                    </NavLink>
                )}
              {user_role === "STAFF" && (
              <NavLink to="/profile/profits">
                <li>Profits</li>
              </NavLink>
                )}
              </ul>
            </div>
            <Outlet/>
          </div>
      </div>
      {checkout && (
                <div className="fixed top-0 z-30 w-screen h-screen flex flex-col items-center justify-center glass">
                    <Checkout
                        checkout={checkout}
                        setCheckout={setCheckout}
                    />
                </div>
            )}
      </div>
  )
}

export default Profile