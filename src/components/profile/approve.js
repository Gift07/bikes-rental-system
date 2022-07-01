import { useDispatch,useSelector } from "react-redux"
import {useEffect,useState} from "react"
import { approve, fetchApproveLocation,dissaprove } from "../../store/actions/location"
import {removeStaff, setStaff} from "../../store/actions/auth"
import ApproveLocation from "../Location/approve"

const Approve = () => {
    const dispatch = useDispatch()
    const {is_loading, locations, error} = useSelector(state => state.location)
    const [location,setLocation] = useState("")
    const [user,setUser] = useState("")

    useEffect(()=>{
        dispatch(fetchApproveLocation())
    },[dispatch])

    const handleClick = () => {
      dispatch(approve(location))
      dispatch(setStaff(user))
      alert("approved")
      window.location.reload()
    }

    const decline = () =>{
      dispatch(dissaprove(location))
      dispatch(removeStaff(user))
      alert("approved")
      window.location.reload()
    }

  return (
    <div className="w-full flex justify-center mt-4 gap-x-3">
       {is_loading && (
        <div>
          <h1>Loading...</h1>
        </div>
       )}
       {locations ? locations.map((item)=> <ApproveLocation
       key={item._id} 
       item={item} 
       handleClick={handleClick}
       decline={decline} 
       setUser={setUser}
       setLocation={setLocation}/>) : error && (
    <div>
      <h1>404- Not found</h1>
    </div>)}
    </div>
  ) 
}

export default Approve