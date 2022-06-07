import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { HiOutlineArrowSmRight } from "react-icons/hi"
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { signUp, loadUser } from '../store/actions/auth'
import "../layout.scss"

const Signup = () => {
    const dispatch = useDispatch()
    const { is_loading, is_authenticated,message } = useSelector(state => state.auth)
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        nationalId:"",
        phone: "",
        confirmPassword:'',
        password:""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(signUp(formData))
        console.log('done')
    }
    
    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

    if (is_authenticated) return <Navigate to="/" /> 
    if (message) return <Navigate to="/verify-phone" />
  return (
      <div className='w-screen h-auto bg-black overflow-hidden text-gray-50 font-gotham'>
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
              Sign up
          </div>
          {/* form */}
          <div className='w-full flex justify-center pt-3'>
              <form
                  onSubmit={handleSubmit}
                  className='w-11/12 md:w-9/12 lg:w-7/12 flex flex-col justify-center items-center mb-14 glass rounded-lg'>
                  <div className='w-11/12 md:w-10/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-3'>
                      <label>
                          firstname
                      </label>
                      <input
                          name='firstname'
                          placeholder='firstname'
                          onChange={(event) => setFormData({...formData,firstname:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-11/12 md:w-10/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-3'>
                      <label>
                          lastname
                      </label>
                      <input
                          name='lastname'
                          placeholder='lastname'
                          onChange={(event) => setFormData({...formData,lastname:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-11/12 md:w-10/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-3'>
                      <label>
                          phone
                      </label>
                      <input
                          name='phone'
                          placeholder='phone'
                          onChange={(event) => setFormData({...formData,phone:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-11/12 md:w-10/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-3'>
                      <label>
                          National Id
                      </label>
                      <input
                          name='nationalId'
                          placeholder='national Id'
                          onChange={(event) => setFormData({...formData,nationalId:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-11/12 md:w-10/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-3'>
                      <label>
                          password
                      </label>
                      <input
                          name='password'
                          placeholder='password'
                          onChange={(event) => setFormData({...formData,password:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-11/12 md:w-10/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-3'>
                      <label>
                          confirm password
                      </label>
                      <input
                          name='confirmPassword'
                          placeholder='confirm password'
                          onChange={(event) => setFormData({...formData,confirmPassword:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-11/12 md:w-10/12 lg:w-8/12 py-3 lg:px-10 flex items-center justify-center'>
                      <button
                          className='px-16 py-2 bg-blue-600 rounded-lg'
                          type='submit'>
                            {is_loading ? (
                                  <>Loading...</>
                              ) : (
                                  <>Sign up</>
                              )}
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