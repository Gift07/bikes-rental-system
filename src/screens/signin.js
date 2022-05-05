import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {Navigate} from "react-router-dom"
import { HiOutlineArrowSmRight } from "react-icons/hi"
import { Link } from 'react-router-dom'
import { signIn } from '../store/actions/auth'
import "../layout.scss"

const Signin = () => {
    const dispatch = useDispatch()
    const { is_loading, is_authenticated, error } = useSelector(state => state.auth)
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(signIn(formData))
    }
    if(is_authenticated) return <Navigate to="/" /> 
  return (
      <div className='w-screen h-screen bg-black overflow-hidden text-gray-50 font-gotham'>
          {/* welcome note */}
          <div className='w-full text-lg lg:text-2xl font-bold flex items-center justify-between px-3 lg:px-24 py-5'>
              <div>
                 Hello welcome to bicycle rental system
              </div>
            <Link to="/">                 
              <div className='px-2 py-1 font-light text-sm lg:text-lg flex items-center rounded-full bg-blue-400 cursor-pointer'>
                    go home <HiOutlineArrowSmRight/>
              </div>
            </Link>
          </div>
          {/* sign in word */}
          <div className='w-full flex items-center justify-center uppercase text-5xl font-bold pt-5'>
              Sign in
          </div>
          {/* form */}
          <div className='w-full flex justify-center pt-3'>
              <form
                  onSubmit={handleSubmit}
                  className=' w-11/12 md:9/12 lg:w-7/12 flex flex-col justify-center items-center glass rounded-lg'>
                  <div className='w-11/12 md:w-10/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-5'>
                      <label>
                          email
                      </label>
                      <input
                          name='email'
                          type='email'
                          placeholder='email'
                          onChange={(event) => setFormData({...formData,email:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-11/12 md:w-10/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-5'>
                      <label>
                          password
                      </label>
                      <input
                          name='password'
                          placeholder='password'
                          onChange={(event) => setFormData({...formData,password:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-11/12 md:w-10/12 lg:w-8/12 py-5 lg:px-10 flex items-center justify-center'>
                      <button
                          className='px-16 py-2 bg-blue-600 rounded-lg'
                          type='submit'>
                          {is_loading ? (
                                  <>Loading...</>
                              ) : (
                                  <>Sign in</>
                              )}
                      </button>
                  </div>
                  <div className='w-full flex items-center justify-center'>
                      <Link to="/user/sign-up">                     
                        <p className='font-light italic text-sm py-3'>
                            Dont have an account?SignUp
                        </p>
                      </Link>
                  </div>
              </form>
          </div>
      </div>
  )
}

export default Signin