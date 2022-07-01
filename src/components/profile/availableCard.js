import React from 'react'

const AvailableCard = ({item,handleClick}) => {
  return (
    <div key={item._id}>
    <img src={item.imageUrl} alt={item.name} className="w-48 h-32 object-cover rounded-md"/>
    <div>
      <h1>{item.name}</h1>
      <h1>{`${item.owner.firstname}` + " "+ `${item.owner.lastname}` }</h1>
    </div>
    <div className="flex items-center justify-between">
      <button onClick={handleClick} className="px-3 py-1 bg-red-600 rounded-md mt-3">
        Delete location
      </button>
    </div>
  </div>
  )
}

export default AvailableCard