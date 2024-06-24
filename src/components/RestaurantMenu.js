import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../constants"
import Shimmer from "./schimmerUI";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {

    const {id} = useParams();
    const [restaurant,menuItems] = useRestaurantMenuData(id);

    const dispatch = useDispatch();

    // const handleAddItem = ()=>{
    //     dispatch(addItem("Grapes"));
    // }

    const addFoodItem = (item)=>{
        dispatch(addItem(item));
    }

    return (!restaurant)? <Shimmer />: (
        <div className="flex ">
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
        {/* <div>
            <button className="p-2 m-2 bg-blue" onClick={()=>handleAddItem()}>Add Item</button>
        </div> */}
        <div className="p-5">
            <h1>Menu</h1>
                <ul>{Object.values(menuItems).map((item)=>(
                    <li key={item.id}> {item.name} - <button className="p-2 m-2 bg-blue" onClick ={()=>addFoodItem(item)}>Add</button></li>
    
                ))}</ul>
        </div>
        </div>
    );
};

export default RestaurantMenu

