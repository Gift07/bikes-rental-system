import React, { useState,useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import Navbar from "../components/navbar"
import { loadUser } from "../store/actions/auth"
import {createBike} from "../store/actions/bikes"
import "../layout.scss"
import { fetchLocation } from '../store/actions/location'

const Profile = () => {
  const { username, email,user_role } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    owner:"",
    name:"",
    location:"",
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
        <div className="w-full h-full px-20 flex flex-col justify-center items-center relative top-14">
          <div className="flex justify-center">          
            {/* user information */}
              <div className="mr-4 w-28 h-28 rounded-full flex items-center justify-center bg-gray-600 text-3xl">
              {username.charAt(0).toUpperCase()}
              </div>
              <div className="overflow-hidden ml-4 mt-2">
                <p className="text-lg font-bold pt-1">
                  {username}
                </p>
                <p className="text-xs font-light pt-1">
                  Dar es salaam,Tanzania
                </p>
                <p className="text-xs font-light pt-1">
                  {email}
                </p>
              </div>
          </div>
        <div className="w-9/12 rounded-md glass mt-5 flex flex-col items-center justify-center">
          {(user_role === "NORMALUSER") ? (
            <div>
              <p className="font-bold text-lg">
                Add new bicycle
              </p>
              <form
                // onSubmit={handleSubmit} 
                className="w-full h-full flex flex-col items-center justify-center">
                  <div className='w-8/12 flex flex-col justify-center px-10 py-5'>
                      <label>
                          Name
                      </label>
                      <input
                          name='name'
                          placeholder='name'
                          onChange={(event) => setFormData({...FormData,name:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-8/12 flex flex-col justify-center px-10 py-5'>
                      <label>
                          image
                      </label>
                      <input
                          name='image'
                          placeholder='image'
                          onChange={(event) => setFormData({...FormData,imageUrl:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-8/12 flex flex-col justify-center px-10 py-5'>
                    <button className='px-12 py-2 bg-blue-600'>
                      Add the bike
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