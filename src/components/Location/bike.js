import { useDispatch } from "react-redux"
import { useState } from "react"
import { addingToTravels } from '../../store/actions/cart'

const Bike = ({ bike, location }) => {
    const dispatch = useDispatch()
    const locationName = location.location.name
    const locationId = location.location._id
    const bikeLocation = useState({locationName,locationId})
    const bikeId = bike
    
    const handleClick = () => {
      dispatch(addingToTravels({ bikeLocation, bikeId }))
      window.location.reload()
    }   
    return (
        <div style={{
            width:"10rem"
          }} className='h-72 rounded-lg bg-red-50'>
              <div className='w-full flex items-center justify-center mt-2'>
                  <img
                    className='w-11/12 rounded-lg h-36 object-cover'
                      src={bike.imageUrl} alt="" />
              </div>
                <div>
                    <p className='font-medium text-md px-2'>
                        {bike.name}
                    </p>
                    <p className='font-medium text-md px-2'>
                        {location.location?.name}
                    </p>
                    <p className='font-medium text-md px-2'>
                      {bike.owner.username}
                    </p>
                </div>
                <div>
                <div>
                  {bike.is_rented ? (
                   <p className='w-20 ml-2 flex items-center justify-center text-gray-50  bg-red-600 text-sm rounded-lg'>
                    Taken
                  </p>
                  ):(                   
                  <p className='w-20 ml-2 flex items-center justify-center text-gray-50  bg-blue-600 text-sm rounded-lg'>
                    Available
                  </p>
                  )}
                </div>
                </div>
                  <div className='w-full flex items-center justify-center mt-2'>
                    {bike.is_rented ? (
                   <button disabled className="bg-green-500 rounded-md px-2 py-1 ">
                    rent the bike
                  </button>
                    ):(         
                    <button onClick={handleClick} className="bg-green-500 rounded-md px-2 py-1 ">
                      rent the bike
                    </button>
                    )}                                 
                </div>
        </div> 
    )
}

export default Bike