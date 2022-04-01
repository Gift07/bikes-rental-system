import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { HiOutlineArrowSmRight } from "react-icons/hi"
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { signUp } from '../store/actions/auth'
import "../layout.scss"

const Signup = () => {
    const dispatch = useDispatch()
    const { is_loading, is_authenticated, error } = useSelector(state => state.auth)
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        confirmPassword:'',
        password:""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(signUp(formData))
        console.log('done')
    }
    if(is_authenticated) return <Navigate to="/" /> 
  return (
      <div className='w-screen h-screen bg-black overflow-hidden text-gray-50 font-gotham'>
          {/* welcome note */}
          <div className='w-full text-2xl font-bold flex items-center justify-between px-24 py-5'>
              <div>
                 Hello welcome to bicycle rental system
              </div>
            <Link to="/">                 
              <div className='px-2 py-1 font-light text-lg flex items-center rounded-full bg-blue-400 cursor-pointer'>
                    go home <HiOutlineArrowSmRight/>
              </div>
            </Link>
          </div>
          {/* sign in word */}
          <div className='w-full flex items-center justify-center uppercase text-5xl font-bold pt-5'>
              Sign up
          </div>
          {/* form */}
          <div className='w-full flex justify-center pt-3'>
              <form
                  onSubmit={handleSubmit}
                  className='w-7/12 flex flex-col justify-center items-center glass rounded-lg'>
                  <div className='w-8/12 flex flex-col justify-center px-10 py-3'>
                      <label>
                          User Name
                      </label>
                      <input
                          name='username'
                          placeholder='user name'
                          onChange={(event) => setFormData({...FormData,username:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-8/12 flex flex-col justify-center px-10 py-3'>
                      <label>
                          email
                      </label>
                      <input
                          name='username'
                          type='email'
                          placeholder='user name'
                          onChange={(event) => setFormData({...FormData,email:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-8/12 flex flex-col justify-center px-10 py-3'>
                      <label>
                          password
                      </label>
                      <input
                          name='password'
                          placeholder='password'
                          onChange={(event) => setFormData({...formData,password:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-8/12 flex flex-col justify-center px-10 py-3'>
                      <label>
                          confirm password
                      </label>
                      <input
                          name='confirmPassword'
                          placeholder='confirm password'
                          onChange={(event) => setFormData({...formData,confirmPassword:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-/8/12 py-3 px-10 flex items-center justify-center'>
                      <button
                          className='px-16 py-2 bg-blue-600 rounded-lg'
                          type='submit'>
                          Sign in
                      </button>
                  </div>
                  <div className='w-full flex items-center justify-center'>
                      <Link to='/user/sign-in'>                        
                        <p className='font-light italic text-sm py-2'>
                            Dont have an account?Signin
                        </p>
                      </Link>
                  </div>
              </form>
          </div>
      </div>
  )
}

export default Signup