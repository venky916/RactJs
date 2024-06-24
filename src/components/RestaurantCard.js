import { IMG_CDN_URL } from "../constants"
import { useContext } from "react"
import userContext from "../utils/userContext"


const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    const {user1} = useContext(userContext);
    return ( 
        <div className=' w-56 p-2 m-2 shadow-lg bg-purple object-contain'>
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold  text-xl">{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{avgRating} stars</h4>
            <h6 className="font-bold">{user1.name}-{user1.email}</h6>
        </div>
    )
}

export default RestaurantCard