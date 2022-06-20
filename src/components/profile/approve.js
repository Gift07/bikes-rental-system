import { useDispatch,useSelector } from "react-redux"
import {useEffect,useState} from "react"
import { approve, fetchLocation } from "../../store/actions/location"

const Approve = () => {
    const dispatch = useDispatch()
    const {is_loading, locations} = useSelector(state => state.location)
    const [id,setId] = useState("")

    useEffect(()=>{
        dispatch(fetchLocation())
    },[dispatch])

    const handleClick = () => {
        dispatch(approve(id))
    }
  return (
    <div className="w-full justify-center mt-4">
       {locations.filter((location) =>location)}
    </div>
  )
}

export default Approve