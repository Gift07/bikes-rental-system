import { useSelector } from "react-redux"
import moment from "moment"

const RentBike = () => {
    const { rent_loading, rent, error } = useSelector(state => state.rent)
    const {userId} = useSelector(state => state.auth)

    const me = rent.find((item) => item.owner === userId)
    console.log(me)
  return (
      <div className="w-full flex flex-col justify-center">
          {rent_loading ? (
              <div className="w-full flex items-center justify-center">
                  Loading...
              </div>
          ) : error ? (
                  <div className="w-full flex items-center justify-center">
                      {error.message}
                  </div>
          ) : me.bikeItem.map(rent => (
          <div className="h-28 w-11/12 lg:w-96 lg:h-36 glass rounded-md flex items-center">
              <div>
                  <img src={rent.bike.imageUrl} alt="bike1" className="h-28 rounded-l-md w-28 object-cover"/>
              </div>
              <div className="h-full p-2">
                  <ul>
                      <li>Name:{rent.bike.name}</li>
                          <li className="flex items-center">TakenBy : {`${rent.renter.firstname} ${rent.renter.lastname}`}</li>
                          <li>{moment(rent.start).fromNow()}</li>
                  </ul>
              </div>
          </div>            
          ))}
    </div>
  )
}

export default RentBike