import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { createLocation } from '../store/actions/location'
import { setStaff, loadUser } from '../store/actions/auth'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        area: '',
        imageUrl:''
    })
    const dispatch = useDispatch()
    const { is_loading } = useSelector(state => state.location)
    const { userId } = useSelector(state => state.auth)
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(createLocation({ ...formData,owner:userId }))
        dispatch(setStaff(userId))
    }
    useEffect(() => {
        dispatch(loadUser())
    },[dispatch])
  return (
      <div className="w-screen min-h-screen bg-black font-gotham text-gray-50">
          <div className='w-full flex items-center'>
              <Link to="/">                 
                <p className='px-2 py-1 bg-blue-500 mt-3 rounded-full ml-4'>
                    go back
                </p>
              </Link>
          </div>
          {/* the form */}
          <div className='w-full flex flex-col items-center justify-center pt-3'>
              <div className='text-3xl font-bold font-gotham mb-8 mt-12 '>
                  Welcome to Our Team
              </div>
              <form
                  onSubmit={handleSubmit}
                  className='w-11/12 lg:w-7/12 flex flex-col justify-center items-center glass rounded-lg'>
                  <div className='w-11/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-3 mt-5'>
                      <label>
                          Location name
                      </label>
                      <input
                          name='name'
                          placeholder='name'
                          onChange={(event) => setFormData({...formData,name:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-11/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-3'>
                      <label>
                          area
                      </label>
                      <input
                          name='area'
                          placeholder='area'
                          onChange={(event) => setFormData({...formData,area:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-11/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-3'>
                      <label>
                          imageUrl
                      </label>
                      <input
                          name='image'
                          placeholder='image link'
                          onChange={(event) => setFormData({...formData,imageUrl:event.target.value})}
                          className='w-full outline-none rounded-md p-2 border-none text-black' />
                  </div>
                  <div className='w-11/12 lg:w-8/12 py-3 lg:px-10 flex items-center justify-center mb-12'>
                      <button
                          className='px-16 py-2 bg-blue-600 rounded-lg'
                          type='submit'>
                            {is_loading ? (
                                  <>Loading...</>
                              ) : (
                                  <>Register Location</>
                              )}
                      </button>
                  </div>
              </form>
          </div>
      </div>
  )
}

export default Register