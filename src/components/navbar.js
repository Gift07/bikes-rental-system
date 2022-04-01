import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../images/Logo.png"

const Navbar = ({is_authenticated,navScroll,username}) => {
  return (
        <div className={`w-full px-10 z-30 fixed top-0 h-14 flex items-center justify-between ${navScroll && `navbar`}`}>
            <div className="">
                <img
                    className="h-12 w-12 object-cover rounded-full"
                    src={Logo} alt="logo" />
            </div>
            <div className="flex items-center">
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
                    {
                        is_authenticated && (
                            <li className="px-4 py-1 rounded-md hover:border-b-2 border-blue-600 cursor-pointer">
                                <Link to="/rental/register">               
                                    join us
                                </Link>
                            </li>
                        )
                    }
                    {
                        navScroll && (
                            <Link to="/user/sign-in">                            
                                <button className='bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500'>
                                    Login
                                </button>
                            </Link> 
                        )
                    }
                </ul>
            </div>
        </div>
  )
}

export default Navbar