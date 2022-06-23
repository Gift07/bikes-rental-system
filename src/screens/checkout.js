import {useEffect,useState} from "react"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserLocation } from "../store/actions/map"
import { createTravel } from "../store/actions/travel"
import { Navigate } from "react-router-dom"


const Checkout = ({ checkout, setCheckout, time, location, price,bike,from }) => {
    const { userId } = useSelector(state => state.auth)
    const { long, lat } = useSelector(state => state.map)
    const { travel_loading } = useSelector(state => state.travel)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('payment')))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserLocation())
        setCart(JSON.parse(localStorage.getItem('payment')))
    }, [dispatch])

    const handleClick = () => {
        dispatch(createTravel({
            from:cart.startTime,
            userId,
            time:cart.timeTaken,
            price:cart.price,
            bike:cart.bike,
        }))
        localStorage.removeItem("payment")
        window.location.reload()
    }
    if(!localStorage.getItem("payment")) return <Navigate to="/" />

  return (
    <div className="w-screen min-h-screen bg-black font-gotham flex items-center justify-center text-gray-50">
      <div className="w-11/12 lg:w-1/2 h-80 bg-red-50 font-gotham text-gray-800 rounded-lg">
          <div className="flex items-center justify-center text-xl lg:text-3xl font-bold py-2">
              Complete transaction
          </div>
          <div className="w-full px-2">
              <h1 className="text-xl font-bold ">
                  Route
              </h1>
              <span>
                  <p className="flex items-center">
                      Starting time:
                      <div className="bg-green-300 rounded-lg p-1">
                        {cart.startTime}
                      </div>
                  </p>
                  <p className="flex items-center">
                      Estimated time :
                      <div className="bg-green-300 rounded-lg p-1 mt-2">
                        { cart.timeTaken}hr
                      </div>
                  </p>
                  <p className="flex items-center">
                      Price:
                      <div className="bg-green-300 rounded-lg p-1 mt-2">
                        {cart.price} Usd
                      </div>
                  </p>
              </span>
              <span>
                  <h1>
                      Payment method
                  </h1>
                  <p className="bg-blue-300 rounded-lg w-20 flex items-center justify-center">
                      Paypal
                  </p>
              </span>
              <div className="w-full mt-2 flex items-center justify-center">
                  <button onClick={handleClick} className="px-3 py-2 bg-blue-600 rounded-lg text-white">
                      { travel_loading ? "loading..": "Pay with paypal"}
                  </button>
                  <button className="px-3 mx-3 py-2 text-white rounded-lg bg-blue-600">
                    Tigo pesa
                  </button>
                  <button className="px-3 mx-3 text-white py-2 rounded-lg bg-red-600">
                    M-pesa
                  </button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Checkout