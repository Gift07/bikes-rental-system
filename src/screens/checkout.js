import {useEffect,useState} from "react"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserLocation } from "../store/actions/map"
import { createTravel } from "../store/actions/travel"


const Checkout = ({ checkout, setCheckout, time, location, price,bike,from }) => {
    const { userId } = useSelector(state => state.auth)
    const { long, lat } = useSelector(state => state.map)
    const { travel_loading } = useSelector(state => state.travel)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("payment")))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserLocation())
        setCart(JSON.parse(localStorage.getItem("payment")))
    }, [dispatch])

    console.log(cart)

    const handleClick = () => {
        dispatch(createTravel({
            from:location,
            userId,
            time,
            price:cart.price,
        }))
        localStorage.removeItem('payment')
    }
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
        <div className="w-11/12 lg:w-1/2 h-80 bg-red-50 font-gotham text-gray-800 rounded-lg">
          <div className="w-full flex justify-end items-center">
              <div className="px-3 py-1">
                 <AiOutlineClose onClick={()=>setCheckout(!checkout)} size="22px" color="black"/>
              </div>
          </div>
          <div className="flex items-center justify-center text-xl lg:text-3xl font-bold py-2">
              Complete transaction
          </div>
          <div className="w-full px-2">
              <h1 className="text-xl font-bold ">
                  Route
              </h1>
              <span className>
                  <p className="flex items-center">
                      Starting time:<div className="bg-green-300 rounded-lg p-1">{cart.startTime}</div>
                  </p>
                  <p className="flex items-center">
                      Estimated time :<div className="bg-green-300 rounded-lg p-1 mt-2">{ cart.timeTaken}hr</div>
                  </p>
                  <p className="flex items-center">
                      Price:<div className="bg-green-300 rounded-lg p-1 mt-2">{cart.price} Usd</div>
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
                  <button className="px-3 py-2 ml-4 bg-blue-600 rounded-md text-white">
                    Tigo pesa
                  </button>
                  <button className="px-3 py-2 ml-4 bg-red-600 rounded-md text-white">
                    M-pesa
                  </button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Checkout