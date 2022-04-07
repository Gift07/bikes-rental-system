import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ bike,name }) => {
  console.log(bike)
  return (
    <div className='w-64 h-96 bg-red-50 rounded-md mb-5'>
      <div className="w-full flex justify-center">
        <img
          className='w-11/12 rounded-md h-52 object-cover mt-2'
          src={bike.imageUrl} alt={bike.name} />
      </div>
      <div className='w-full flex flex-col'>
        <p className='font-bold text-lg px-4 text-gray-800 mt-1'>
          {bike.name}
        </p>
        <p className='font-bold text-md px-4 text-gray-800 mt-1'>
          {name}
        </p>
        <p className='font-bold text-md px-4 text-gray-800 mt-1'>
          {bike.owner.username}
        </p>
      </div>
      <div>
        <p className='w-20 ml-4 flex items-center justify-center  bg-blue-600 txt-xs rounded-lg'>
          Available
        </p>
      </div>
      <div className='w-full flex items-center justify-center mt-3'>
        <Link to="/bike/rent">        
            <button className='px-4 py-1 rounded-lg bg-green-500 hover:bg-green-400'>
              rent the bike
            </button>
        </Link>
      </div>
    </div>
  )
}

export default Card