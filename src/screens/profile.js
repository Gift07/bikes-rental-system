import React, { useState,useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import Navbar from "../components/navbar"
import { loadUser } from "../store/actions/auth"
import {createBike} from "../store/actions/bikes"
import "../layout.scss"
import { fetchLocation } from '../store/actions/location'

const Profile = () => {
  const { firstname, email, user_role, userId } = useSelector(state => state.auth)
  const { locations } = useSelector(state => state.location)

  console.log(locations[0])
  console.log(userId)
  // console.log(locations[1].owner === userId)

  const myLocation = locations.find((location) => (location.owner === userId))
  console.log(myLocation)

  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    owner:userId,
    name:"",
    location:myLocation._id,
    imageUrl:""
  })

  useEffect(() => {
    dispatch(loadUser())
    dispatch(fetchLocation())
  }, [dispatch])
  
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(createBike(formData))
}
  return (
     <div className="w-screen min-h-screen bg-black font-gotham text-gray-50">
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
        <div className="w-11/12 md:w-10/12 lg:w-9/12 rounded-md glass mt-3 lg:mt-5 flex flex-col items-center justify-center">
          {(user_role === "STAFF") ? (
            <div>
              <p className="font-bold text-lg">
                Add bicycle
              </p>
              <form
                onSubmit={handleSubmit} 
                className="w-full h-full flex flex-col items-center justify-center">
                  <div className='w-11/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-5'>
                      <label>
                          Name
                      </label>
                      <input
                          name='name'
                          placeholder='name'
                          onChange={(event) => setFormData({...formData,name:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-11/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-5'>
                      <label>
                          image
                      </label>
                      <input
                          name='image'
                          placeholder='image'
                          onChange={(event) => setFormData({...formData,imageUrl:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-11/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-5'>
                    <button type="submit" className='px-12 py-2 bg-blue-600 rounded-md'>
                      Add bike
                    </button>
                  </div>
              </form>
            </div>
          ) : (<div>
              <h1 className="text-xl font-medium">
                Thank you for using bikes rental system with us enjoy our services
              </h1>
          </div>)}
          </div>
        </div>
      </div>
  )
}

export default Profile