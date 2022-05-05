import React from 'react'
import { useSelector } from 'react-redux'

const Search = () => {
const {username} = useSelector(state=>state.auth)
  return (
      <div className="w-full h-36 flex flex-col items-center justify-center">
          <h1 className="text-lg font-bold text-gray-50">
              Hello {username} where are you going today
          </h1>
          <h1 className="text-lg font-bold text-gray-50">
             check your nearest renting location
          </h1>
      </div>
  )
}

export default Search