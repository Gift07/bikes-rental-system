import React from 'react'
import Navbar from '../components/navbar'
import Matheus from "../images/matheus.jpg"
import "../layout.scss"

const Travels = () => {
  return (
      <div className="w-screen min-h-screen bg-black font-gotham text-gray-50">
        <Navbar />
        <div className="relative top-14 flex flex-col items-center justify-center">
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
            <div className='w-11/12 flex items-center justify-center h-16 border-b-2'>
              <ul className='text-gray-50 flex h-full items-center font-bold text-sm'>
                  <li className='px-10 flex h-full border-b-2 border-purple-700 items-center'>
                      current travel
                      <div className='px-2 py-1 text-xs font-medium rounded-md flex items-center justify-center bg-purple-700 ml-1'>
                          1
                      </div>
                  </li>
                  <li className='px-10 flex h-full border-b-2 border-purple-700 items-center'>
                      all travels
                      <div className='px-2 py-1 text-xs font-medium rounded-md flex items-center justify-center bg-purple-600 ml-1'>
                         5
                      </div>
                  </li>
              </ul>
            </div>
        </div>
      </div>
  )
}

export default Travels