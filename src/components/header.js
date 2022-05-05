import React from 'react'
import { Link} from 'react-router-dom'
import Matheus from "../images/matheus.jpg"


const Header = ({ is_authenticated, username,navScroll }) => {
    return (
       <div className="w-screen flex flex-col font-gotham">
            <div className="w-full px-4 md:px-8 lg:px-20 flex items-center justify-between">
                <div>
                {
                    is_authenticated ? (
                        <p className="font-light text-xl md:text-3xl lg:text-4xl">
                            Hello, {username}
                        </p>
                    ) : (
                            <p className="font-light text-xl md:text-3xl lg:text-4xl">
                                Hello,
                            </p>
                    )
                }
                        <p className="font-bold text-xl md:text-3xl lg:text-4xl">
                            Where are you going Today?
                        </p>
                    </div>
                    <div>
                    {is_authenticated ? (  
                        <>
                            {!navScroll && (
                                <img
                                    className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded-full"
                                    src={Matheus} alt="" />
                            )}
                        </>

                    ) : (
                           <>
                                    {
                                        !navScroll ? (
                                            <Link to="/user/sign-in">                            
                                                    <button className='bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500'>
                                                        Login
                                                    </button>
                                            </Link>
                                        ) : (
                                                ""
                                        )

                                    }
                           </>
                            )
                        }
                    </div>
            </div>
       </div>
  )
}

export default Header