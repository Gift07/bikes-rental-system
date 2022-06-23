import { useDispatch,useSelector } from "react-redux"
import {useEffect,useState} from "react"
import { approve, fetchApproveLocation } from "../../store/actions/location"
import {setStaff} from "../../store/actions/auth"
import ApproveLocation from "../Location/approve"

const Approve = () => {
    const dispatch = useDispatch()
    const {is_loading, locations, error} = useSelector(state => state.location)
    const [location,setLocation] = useState("")
    const [user,setUser] = useState("")

    console.log(locations)

    useEffect(()=>{
        dispatch(fetchApproveLocation())
    },[dispatch])

    const handleClick = () => {
      dispatch(approve(location))
      dispatch(setStaff(user))
    }

  return (
    <div className="w-full flex justify-center mt-4 gap-x-3">
       {is_loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
       ) : locations.map((item)=> <ApproveLocation
       key={item._id} 
       item={item} 
       handleClick={handleClick} 
       setUser={setUser}
       setLocation={setLocation}/> )}
    </div>
  ) ? error : (
    <div>
      <h1>404- Not found</h1>
    </div>
  )
}

export default Approve