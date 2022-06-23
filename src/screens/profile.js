import React, { useState,useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import Navbar from "../components/navbar"
import { loadUser } from "../store/actions/auth"
import { fetchRent } from '../store/actions/rent'
import { NavLink, Outlet } from "react-router-dom"
import {deleteMyRents, fetchMyRents} from '../store/actions/myrents'
import { fetchLocation } from '../store/actions/location'
import { returnTheBike } from '../store/actions/bikes'
import { returnBike } from '../store/actions/rent'

const Profile = () => {
  const { firstname, email, user_role, userId } = useSelector(state => state.auth)
  const {returntBike} = useSelector(state => state.bikes)
  const { error, myrents, my_loading } = useSelector(state => state.myrents)
  const { locations } = useSelector(state => state.location)
  const [selected,setSelected] = useState("")
  let bie
  let rentr
  let locaton

  const me = myrents.find((item) => item.user._id = userId)

  if(me){
    bie = me.bike._id
  
    rentr = me.user._id
  
    locaton = me.location._id
  }


  // console.log(locations[1].owner === userId)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
    dispatch(fetchRent())
    dispatch(fetchLocation())
    dispatch(fetchMyRents())
  }, [dispatch])

  const handleClick = ()=>{
    dispatch(returnBike({ bike: bie, location:locaton , renter:rentr }))
    // dispatch(returnTheBike({ bike: bie, location:selected }))

    // // deleting my rents
    // dispatch(deleteMyRents({ bike:bie, location:locaton, user:rentr}))

    // dispatch({
    //   type:"NORETURN"
    // })
    // window.location.reload()
  }
  
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
              {user_role === "ADMIN" && (
              <NavLink to="/profile/approve-location">
                <li>Approve location</li>
              </NavLink>
                )}
                {user_role === "ADMIN" && (
              <NavLink to="/profile/available-location">
                <li>Available location</li>
              </NavLink>
                )}
              {user_role === "STAFF" ? (
                <NavLink to="/profile/rent-bike">
                  <li>Rent</li>
                </NavLink>
                ) : me && (
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
      {returntBike && (
        <div className='absolute glass w-screen h-screen z-50 flex items-center justify-center'>
          <div className='w-72 p-5 bg-red-50 rounded-lg'>
            <div>
              <h1 style={{textAlign:"center"}} className='text-gray-900 text-md'>
                Select The locetion you are returning the bike from
              </h1>
            </div>
            <div className='flex items-center justify-center w-full mt-4'>
  `          <select onChange={(e)=>setSelected(e.target.value)} className='text-gray-900 p-2 bg-red-50 rounded-md h-10 w-64 focus:border-2 border-sky-500'>
              <option>
                Choose location
              </option>
              {locations.map((place) =>(
              <option value={place._id} className='text-black' key={place._id}>
                {place.name}
              </option>
              )
              )}
            </select>`
            </div>
          <div className='w-full flex items-center justify-center mt-4'>
            <button onClick={handleClick} className='px-3 py-2 bg-blue-600 rounded-md text-white'>
              Return bike
            </button>
          </div>
          </div>
        </div>
      )}
      </div>
  )
}

export default Profile