import React from 'react'
import Elise from "../../images/ayo.jpg"
import "../../layout.scss"
import { Link } from "react-router-dom"

const Landing = () => {
  return (
      <div className="w-screen h-100 text-gray-50 font-gotham realtive">
          <div className="w-full h-100 absolute bg">
              <img src={Elise} alt="elise" className="w-full h-full object-cover"/>
          </div>
          <div className="w-full h-100 absolute material">
              <h1 className="font-extrabold text-4xl text-gray-900 px-10 mt-48 ">
                  Travel any where with our bikes 
              </h1>
              <p className="font-light text-xl mt-3 px-10">
                  Open your account and start riding with us anywhere in dar es salaam
              </p>
              <div className="px-10 mt-3">
                  <Link to="/user/sign-up">
                    <button className="px-8 py-2 bg-purple-600 rounded-md">
                        Get started
                    </button>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default Landing