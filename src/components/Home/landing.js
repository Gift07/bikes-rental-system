import React from 'react'
import Elise from "../../images/bike1.jpg"
import "../../layout.scss"
import { Link } from "react-router-dom"

const Landing = () => {
  return (
      <div className="w-screen h-96 text-gray-50 font-gotham realtive">
          <div className="w-full h-100 absolute bg">
              <img src={Elise} alt="elise" className="w-full h-full object-cover"/>
          </div>
          <div className="w-full h-100 absolute material">
              <h1 className="font-extrabold text-2xl md:text-3xl lg:text-5xl px-4 md:px-8 lg:px-10 mt-48 ">
                  Travel any where with our bikes 
              </h1>
              <p className="font-light text-sm md:text-lg lg:text-xl mt-2 lg:mt-3 px-4 md:px-8 lg:px-10">
                  Open your account and start riding with us anywhere in dar es salaam
              </p>
              <div className="px-4 md:px-8 lg:px-10 mt-2 lg:mt-3">
                  <Link to="/user/sign-up">
                    <button className="px-6 md:px-8 lg:px-8 py-2 bg-purple-600 hover:bg-blue-700 active:bg-blue-800 rounded-md">
                        Get started
                    </button>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default Landing