import { useDispatch,useSelector } from "react-redux"
import {useEffect,useState} from "react"
import { deleteLocation, fetchLocation } from "../../store/actions/location"
import AvailableCard from "./availableCard"

const Available = () => {
  const dispatch = useDispatch()
  const {is_loading, locations, error} = useSelector(state => state.location)
  console.log(locations)

  useEffect(() => {
    dispatch(fetchLocation())
  },[])

  const handleClick = () => {
    dispatch(deleteLocation("deleted"))
  }

  return (
    <div className="w-full flex items-center justify-center gap-4">
      {locations.map((item)=>(
      <AvailableCard
          key={item._id} 
          item={item}
          handleClick={handleClick} 
      />  
      ))}
    </div>
  )
}

export default Available