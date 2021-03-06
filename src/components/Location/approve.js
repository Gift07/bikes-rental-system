import React from 'react'

const ApproveLocation = ({item, handleClick,decline,setLocation,setUser}) => {
  setUser(item.owner._id)
  setLocation(item._id)
  return (
    <div key={item._id}>
    <img src={item.imageUrl} alt={item.name} className="w-48 h-32 object-cover rounded-md"/>
    <div>
      <h1>{item.name}</h1>
      <h1>{`${item.owner.firstname}` + " "+ `${item.owner.lastname}` }</h1>
    </div>
    <div className="flex items-center justify-between">
      <button onClick={handleClick} className="px-3 py-1 bg-blue-600 rounded-md mt-3">
        Approve
      </button>
      <button onClick={decline} className="px-3 py-1 bg-red-600 rounded-md mt-3">
        Decline
      </button>
    </div>
  </div>
  )
}

export default ApproveLocation