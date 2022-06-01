import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai"
import { useSelector, useDispatch } from "react-redux"
import { logOut } from '../store/actions/auth'
import Logo from "../images/Logo.png"

const Navbar = ({ is_authenticated, navScroll, sidebar, setSidebar }) => {
    const { firstname,lastname } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(logOut())
        window.location.reload()
    }
    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
  return (
        <div className={`w-full px-4 md:px-8 lg:px-10 z-30 fixed top-0 h-14 flex items-center justify-between ${navScroll && `navbar`}`}>
            <div className="">
                <img
                    className="h-12 w-12 object-cover rounded-full"
                    src={Logo} alt="logo" />
            </div>
            <div className="hidden lg:flex items-center ">
                <ul className="flex items-center justify-between pr-5">
                    <NavLink to="/">
                        <li className="px-4 py-1 rounded-md hover:border-b-2 border-blue-600 cursor-pointer">
                            Home
                        </li>
                    </NavLink>
                    <NavLink to="/travels">
                        <li className="px-4 py-1 rounded-md hover:border-b-2 border-blue-600 cursor-pointer">
                            Travels
                        </li>
                    </NavLink>
                    <NavLink to="/locations">
                        <li className="px-4 py-1 rounded-md hover:border-b-2 border-blue-600 cursor-pointer">
                            Locations
                        </li>
                    </NavLink>
                    { is_authenticated && (
                            <li className="px-4 py-1 rounded-md hover:border-b-2 border-blue-600 cursor-pointer">
                                <Link to="/rental/register">               
                                    join us
                                </Link>
                            </li>)
                    }
                    {navScroll && (
                          <>
                          {is_authenticated ? (
                                    <>
                                      <Link to="/profile">                                        
                                        <div className="w-12 h-12 rounded-full bg-gray-600 text-xl flex items-center justify-center">
                                          {firstname.charAt(0).toUpperCase()}
                                          {lastname.charAt(0).toUpperCase()}
                                        </div>
                                  </Link>
                                  <button
                                    onClick={handleClick}
                                    className="px-8 py-2 rounded-lg text-gray-50 font-gotham bg-red-600 ml-4 mt-3">
                                        Logout
                                    </button>
                                      </>
                                  ): (                                      
                                    <Link to="/user/sign-in">                            
                                        <button className='bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500'>
                                            Login
                                        </button>
                                    </Link> 
                                  )
                              }
                          </>
                        )
                    }
                </ul>
            </div>
            <div className='flex items-center lg:hidden'>
                <AiOutlineMenu onClick={handleSidebar} size={22}/>
            </div>
        </div>
  )
}

export default Navbar