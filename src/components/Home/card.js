import React from 'react'
import Zhura from "../../images/zhura.jpg"
import { Link } from 'react-router-dom'

const Card = ({location}) => {
    return (
        <div className="w-60 h-80">
            <img
                className="w-44 h-52 rounded-md object-cover border border-purple-700"
                src={location.imageUrl} alt="" />
            {/* location info */}
            <div className="w-full py-2">
                <p className="font-bold text-lg">
                    {location.name}
                </p>
                <p className="font-medium text-xs">
                    50-bikes
                </p>
                <Link to={`/rental-location/${location._id}`}>                  
                    <button className="px-6 py-1 mt-2 rounded-md bg-purple-700">
                        view
                    </button>
                </Link>
            </div>
        </div>
  )
}

export default Card