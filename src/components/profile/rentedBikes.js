import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchMyRents } from "../../store/actions/myrents"
import bike1 from "../../images/bike1.jpg"
import moment from "moment"

const RentedBikes = () => {
  const dispatch = useDispatch()
  const { error, myrents, my_loading } = useSelector(state => state.myrents)
  const {userId} = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(fetchMyRents())
  }, [dispatch])

  const me = myrents.find((item) => item.user._id = userId)
  console.log(me)

  const handleClick = () => {
    dispatch(returnBike({ bike: me.bike._id, location: me.location._id, renter: me.renter._id }))
  }
  
  return (
    <div className="w-full justify-center mt-4">
      <div className="w-11/12 h-32 rounded-md glass flex items-center">
        <div>
          <img src={me.bike.imageUrl} alt="bike1" className="h-32 w-36 object-cover rounded-l-md"/>
        </div>
        <div className="h-full p-2">
          <ul>
            <li>name:{me.bike.name}</li>
            <li>from: {me.location.name}</li>
            <li>{moment(me.created_at).fromNow()}</li>
          </ul>
          <button onClick={handleClick} className="px-3 py-1 bg-blue-600 rounded-md mt-3">
            Return the bike
          </button>
        </div>
      </div>
    </div>
  )
}

export default RentedBikes