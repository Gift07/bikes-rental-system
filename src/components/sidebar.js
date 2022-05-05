import React from 'react'
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai"
import { MdCardTravel } from "react-icons/md"
import { IoLocationOutline } from "react-icons/io5"
import { FaHandshake } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logOut } from '../store/actions/auth'
import "../layout.scss"

const Sidebar = ({sidebar,setSidebar}) => {
    const dispatch = useDispatch()
    const { is_authenticated,username,email } = useSelector(state => state.auth)
    const handleClick = () => {
        dispatch(logOut())
        window.location.reload()
    }
    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
  return (
      <div className="w-screen h-screen flex flex-col fixed">
          <div style={{height: '60%'}} className="bg-black text-gray-50 font gotham">
              <div className="w-screen h-16 flex justify-end">
                  <span className="p-4">
                     <AiOutlineClose color="white" onClick={handleSidebar} size="22px" />
                  </span>
              </div>
                {is_authenticated && (
                <div className="w-full flex items-center px-4 py-3">
                        <div className="w-12 h-12 rounded-full capitalize bg-gray-700 text-3xl font-light text-gray-50 flex items-center justify-center">
                            {username[0]}
                        </div>
                        <div className="ml-4">
                        <p>
                            {username}
                        </p>
                        <p>
                            {email}
                        </p>
                    </div>
                 </div>   
                )}
              <div className="w-screen flex flex-col justify-start items-start">
                  <ul>
                      <li className="flex items-center justify-center px-4 py-2 font-light text-xl">
                          <AiOutlineHome />
                          <p className="ml-4">
                            Home
                          </p>
                      </li>
                      <li className="flex items-center justify-center px-4 py-2  font-light text-xl">
                          <MdCardTravel />
                          <p className="ml-4">
                            Travels
                          </p>
                      </li>
                      <li className="flex items-center justify-center px-4 py-2 ml-4 font-light text-xl">
                          <IoLocationOutline />
                          <p className="ml-4">
                            Locations
                          </p>
                      </li>
                      <li className="flex items-center justify-center px-4 py-2 font-light text-xl">
                          <FaHandshake/>
                          <p className="ml-4">
                            join us
                          </p>
                          </li>
                  </ul>
                  {is_authenticated ? (
                      <button
                          onClick={handleClick}
                          className="px-8 py-2 rounded-lg text-gray-50 font-gotham bg-red-600 ml-4 mt-3">
                            Logout
                        </button>
                  ) : (
                    <Link to="/user/sign-in"> 
                        <button className="px-8 py-2 rounded-lg text-gray-50 font-gotham bg-blue-600 ml-4 mt-3">
                        Login
                        </button>
                    </Link>       
                  ) }
              </div>
          </div>
          <div style={{height:'40%'}} className="sidebar w-screen">

          </div>
      </div>
  )
}

export default Sidebar