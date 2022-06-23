import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createBike } from "../../store/actions/bikes"
import {fetchLocation} from "../../store/actions/location"

const Bike = () => {
    const dispatch = useDispatch()
    const { firstname, email, user_role, userId } = useSelector(state => state.auth)
    const {locations} = useSelector(state => state.location)
    const myLocation = locations.find((location) => (location.owner._id === userId))
    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("") 

    useEffect(() => {
        dispatch(fetchLocation())
    }, [dispatch])
  console.log(myLocation)


    const handleSubmit = (event) => {
        event.preventDefault()
      dispatch(createBike({ name, imageUrl, location: myLocation._id, owner: userId }))
      alert("bike added successfull")
    }

  return (
    <div className="w-11/12  md:w-10/12 lg:w-9/12 rounded-md glass mt-3 lg:mt-5 flex flex-col items-center justify-center">
    {(user_role === "STAFF") ? (
      <div>
        <p className="font-bold text-lg">
          Add bicycle
        </p>
        <form
          onSubmit={handleSubmit} 
          className="w-full h-full flex flex-col items-center justify-center">
            <div className='w-11/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-5'>
                <label>
                    Name
                </label>
                <input
                    name='name'
                    placeholder='name'
                    onChange={(event) => setName(event.target.value)}
                    className='w-full outline-none rounded-md p-2 border-none text-black' />
            </div>
            <div className='w-11/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-5'>
                <label>
                    image
                </label>
                <input
                    name='image'
                    placeholder='image'
                    onChange={(event) => setImageUrl(event.target.value)}
                    className='w-full outline-none rounded-md p-2 border-none text-black' />
            </div>
            <div className='w-11/12 lg:w-8/12 flex flex-col justify-center lg:px-10 py-5'>
              <button type="submit" className='px-12 py-2 bg-blue-600 rounded-md'>
                Add bike
              </button>
            </div>
        </form>
      </div>
    ) : (<div>
        <h1 className="text-xl font-medium">
          Thank you for using bikes rental system with us enjoy our services
        </h1>
    </div>)}
    </div>
  )
}

export default Bike