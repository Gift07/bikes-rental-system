import React, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import Navbar from "../components/navbar"
import Matheus from "../images/matheus.jpg"
import "../layout.scss"

const Profile = () => {
  const { username, phone, location, email } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [formData, setFormData]  = useState({
    username: "",
    email: "",
    phone: "",
    location:""
  })
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch()
}
  return (
     <div className="w-screen min-h-screen bg-black font-gotham text-gray-50">
        <Navbar />
        <div className="w-full h-full px-20 flex flex-col justify-center items-center relative top-14">
          <div className="flex justify-center">          
            {/* user information */}
              <div className="mr-4">
                <img 
                  className="w-28 h-28 rounded-full object-cover"
                  src={Matheus} alt="matheus"/>
              </div>
              <div className="overflow-hidden ml-4 mt-2">
                <p className="text-lg font-bold pt-1">
                  John Doe
                </p>
                <p className="text-xs font-light pt-1">
                  Dar es salaam,Tanzania
                </p>
                <p className="text-xs font-light pt-1">
                  Johndoe@gmail.com
                </p>
                <p className="text-xs font-light pt-1">
                  + 255 745854301
                </p>
              </div>
          </div>
          <div className="w-9/12 rounded-md glass mt-5 flex flex-col items-center justify-center">
            <p className="font-bold text-lg">
              Edit your information
            </p>
            <form
              // onSubmit={handleSubmit} 
              className="w-full h-full flex flex-col items-center justify-center">
                 <div className='w-8/12 flex flex-col justify-center px-10 py-5'>
                    <label>
                        User Name
                    </label>
                    <input
                        name='username'
                        placeholder='user name'
                        // onChange={(event) => setFormData({...FormData,username:event.target.value})}
                        className='w-full outline-none rounded-md p-2 border-none text-black' />
                 </div>
                 <div className='w-8/12 flex flex-col justify-center px-10 py-5'>
                    <label>
                        email
                    </label>
                    <input
                        name='email'
                        type="email"
                        placeholder='email'
                        // onChange={(event) => setFormData({...FormData,email:event.target.value})}
                        className='w-full outline-none rounded-md p-2 border-none text-black' />
                 </div>
                 <div className='w-8/12 flex flex-col justify-center px-10 py-5'>
                    <label>
                        phone
                    </label>
                    <input
                        name='phone'
                        placeholder='phone'
                        // onChange={(event) => setFormData({...FormData,phone:event.target.value})}
                        className='w-full outline-none rounded-md p-2 border-none text-black' />
                 </div>
                 <div className='w-8/12 flex flex-col justify-center px-10 py-5'>
                    <label>
                        location
                    </label>
                    <input
                        name='location'
                        placeholder='location'
                        // onChange={(event) => setFormData({...FormData,username:event.target.value})}
                        className='w-full outline-none rounded-md p-2 border-none text-black' />
                 </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Profile