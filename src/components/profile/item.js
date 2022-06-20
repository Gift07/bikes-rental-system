import React from 'react'

const item = () => {
  return (
    <div className="w-11/12 h-32 rounded-md glass flex items-center">
    <div>
      <img src={me.bike.imageUrl} alt="bike1" className="h-32 w-36 object-cover rounded-l-md"/>
    </div>
    <div className="h-full p-2">
      <ul>
        <li>name:</li>
        <li>from: </li>
      </ul>
      <button className="px-3 py-1 bg-blue-600 rounded-md mt-3">
        Return the bike
      </button>
    </div>
  </div>
  )
}

export default item