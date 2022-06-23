import React from 'react'
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"

const Driver = () => {
    const {firstname,user_role,has_requested} = useSelector(state => state.auth)
    console.log(has_requested)
  return (
      <div className="w-full h-96 flex flex-col bg-black justify-center items-center">
          <h1 style={{textAlign: 'center'}} className="text-2xl lg:text-3xl font-bold text-gray-50 px-3 lg:px-5">
              Hello {firstname} you can Open your own renting area now
          </h1>
          <p style={{textAlign: 'center'}} className="font-light text-md mt-3 px-2  text-gray-50 sm:max-w-md">
              Join us now its not late to become one of our members by opening your own place
          </p>
          {(user_role === "NORMALUSER" && !has_requested) && (
            <Link to="/rental/register">                                       
                <button className="px-5 py-2 rounded-md bg-green-600 mt-3 hover:bg-blue-700">
                    Open your place
                </button>
            </Link>
          )} 
          {(user_role === "NORMALUSER" && has_requested &&
            (<div onClick={() => alert("your request is being processed")}>
                <h1>Your Request will be approved by admin very soon</h1>
            </div>)
          ) }
          {( user_role === "STAFF" &&
            (<Link to="/profile">                                       
            <button className="px-5 py-2 rounded-md bg-blue-600 mt-3 hover:bg-blue-700">
                visit profile
            </button>
        </Link>)
          )}
            {( user_role === "ADMIN" &&
            (<Link to="/profile">                                       
            <button className="px-5 py-2 rounded-md bg-blue-600 mt-3 hover:bg-blue-700">
                visit profile
            </button>
        </Link>)
          )}
      </div>
  )
}

export default Driver