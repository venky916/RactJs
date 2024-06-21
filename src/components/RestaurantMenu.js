import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../constants"
import Shimmer from "./schimmerUI";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";

const RestaurantMenu = () => {

    const {id} = useParams();
    const [restaurant,menuItems] = useRestaurantMenuData(id);

    return (!restaurant)? <Shimmer />: (
        <div className="menu">
        <div>
            {console.log(restaurant)}
            <h1>Restaurant id : {id} </h1>
            <h2>{restaurant.name}</h2>
            <img
                className="restaurant-img"
                src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
                alt={restaurant?.name}
            />
            <h3>{restaurant.area}</h3>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.avgRating} Stars</h3>
            <h3>{restaurant.costForTwoMessage }</h3>
        </div>
        <div>
            <h1>Menu</h1>
                <ul>{Object.values(menuItems).map((item)=>(
                    <li key={item.id}> {item.name}</li>
                ))}</ul>
        </div>
        </div>
    );
};

export default RestaurantMenu

