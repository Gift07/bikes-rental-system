import React from 'react'
import { Link } from 'react-router-dom'
import bike3 from "../images/bike3.jpg"

const Cart = () => {
  return (
      <div className='w-screen min-h-screen bg-black text-gray-50 font-gotham'>
          <div className='w-full flex items-center'>
              <Link to="/">                 
                <p className='px-2 py-1 bg-blue-500 mt-3 rounded-full ml-4'>
                    go back
                </p>
              </Link>
          </div>
          <div className='w-full flex items-center justify-between px-20'>
              <div className='flex flex-col py-4'>
                    <p className='font-light text-3xl'>
                        Hello,Gift
                    </p>
                    <p className='font-bold text-3xl'>
                        Complete your transaction to travel safe with us!
                    </p>
              </div>
          </div>
          <div className='w-full h-full flex items-center justify-center'>
              <div style={{height:"30rem"}}
                  className='w-9/12 bg-gray-400 mt-4 rounded-lg grid grid-cols-3'>
                  <div className='col-span-2 bg-red-200 h-full w-full rounded-l-lg'>
                      Map
                  </div>
                  <div className='w-full h-full rounded-r-lg flex flex-col bg-purple-300'>
                      <div className='w-full h-44 flex items-center justify-center'>
                          <img
                              className='w-11/12 rounded-lg h-full object-cover mt-4'
                              src={bike3} alt="bike" />
                      </div>
                      {/* travel information */}
                      <div className='w-full h-full'>
                          <div className='px-4 pt-4'>
                              <p className=' flex items-center'>
                                  from : <p className='px-2 py-1 rounded-lg bg-green-400 ml-4'>Kimara</p>
                              </p>
                              <p className=' flex items-center mt-2'>
                                  to : <p className='px-2 py-1 rounded-lg bg-blue-400 ml-4'>Mbezi</p>
                              </p>
                              <p className=' flex items-center mt-2'>
                                  Estimated time : <p className='px-2 py-1 rounded-lg bg-green-400 ml-4'>1hr</p>
                              </p>
                              <p className=' flex items-center text-lg font-medium mt-2'>
                                 2000/=<p className='font-bold'>Tzs</p>
                              </p>
                              <div className='w-full flex items-center justify-center mt-6'>
                                  <button className='bg-green-500 px-12 uppercase rounded-lg hover:bg-green-400 py-2'>
                                      rent the bike
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Cart