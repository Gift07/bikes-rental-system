import React from 'react'
import Navbar from '../components/navbar'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchTravels } from "../store/actions/travel"
import { loadUser } from "../store/actions/auth"
import "../layout.scss"

const Travels = () => {
  const { username, email } = useSelector(state => state.auth)
  const {travel} = useSelector(state => state.travel)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTravels())
    dispatch(loadUser())
    localStorage.removeItem('cartItems')
  },[dispatch])
  return (
      <div className="w-screen min-h-screen bg-black font-gotham text-gray-50">
        <Navbar />
        <div className="relative top-14 flex flex-col items-center justify-center">
            <div className="flex justify-center">          
              {/* user information */}
              <div className="mr-4 w-28 h-28 rounded-full capitalize bg-gray-800 flex items-center justify-center">
                  {username}
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
            <div className='w-11/12 flex flex-col items-center justify-center h-16 border-b-2'>
              <ul className='text-gray-50 flex h-full items-center font-bold text-sm'>
                  <li className='px-10 flex h-full border-b-2 border-purple-700 items-center'>
                      current travel
                      <div className='px-2 py-1 text-xs font-medium rounded-md flex items-center justify-center bg-purple-700 ml-1'>
                          {travel.length}
                      </div>
                  </li>
                  {/* <li className='px-10 flex h-full border-b-2 border-purple-700 items-center'>
                      all travels
                      <div className='px-2 py-1 text-xs font-medium rounded-md flex items-center justify-center bg-purple-600 ml-1'>
                         5
                      </div>
                  </li> */}
          </ul>
          <div className="w-11/12 md:w-9/12 lg:w-7/12 h-32 flex items-center justify-between bg-red-50 rounded-lg text-black">
            <p>
              Estimated time: 1hr
            </p>
            <p>
              Price:1 tzs
            </p>
            <p>
              from:kimara
            </p>
          </div>
            </div>
        </div>
      </div>
  )
}

export default Travels