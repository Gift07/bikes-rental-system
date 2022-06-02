import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import {verifyUser} from "../store/actions/auth"

const Loading = () => {
  const { is_authenticated } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [form, setForm] = React.useState({
    verificationCode:""
  })
  
  const handleClick = () => {
    dispatch(verifyUser(form))
  }

  if (is_authenticated) return <Navigate to="/" /> 
  return (
      <div className='w-screen h-screen bg-black flex flex-col items-center justify-center'>
          <h1 className='text-gray-100 text-lg mt-5'>Please Enter verification code verify your account</h1>
          <div className="mt-5">
            <input 
              placeholder='Enter verification code'
              onChange={(event) => setForm({...form, verificationCode:event.target.value})}
              className="outline-none p-2 w-64 h-10 rounded-md border border-blue-600 bg-black"
        />
        </div>
        <button onClick={handleClick} className="px-4 py-2 mt-5 bg-blue-600 text-white rounded-md">Submit</button>
      <div className="mt-5">
        <h1>if you did not get code contact support!</h1>
          </div>
      </div>
  )
}

export default Loading