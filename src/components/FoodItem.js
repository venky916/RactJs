import { IMG_CDN_URL } from "../constants"


const FoodItem = ({ name, description, price, imageId}) => {

    return ( 
        <div className=' w-56 p-2 m-2 shadow-lg bg-purple object-contain'>
            <img src={IMG_CDN_URL + imageId} />
            <h2 className="font-bold  text-xl">{name}</h2>
            <h3>{description}</h3>
            <h4>{price} Rs</h4>
        </div>
    )
}

export default FoodItem