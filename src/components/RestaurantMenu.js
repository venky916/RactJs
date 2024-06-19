import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../constants"
import Shimmer from "./schimmerUI";

const RestaurantMenu = () => {
    // const params =useParams();
    // const {id}=params;

    const [restaurant , setRestaurant ]=useState(null);
    const [menuItems, setMenuItems] = useState([]);

    //destructure on the fly
    const {id} = useParams();

    useEffect(()=>{
        getRestaurantsInfo();
    },[])


    async function getRestaurantsInfo(){
        const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+id);
        const json = await data.json();
        console.log(json);
        // console.log(json?.data?.cards[2]?.card?.card?.info || null);
        // Set restaurant data
        const restaurantData = json?.data?.cards[2]?.card?.card?.info || null;
        // console.log(restaurantData);
        setRestaurant(restaurantData);

        // Set menu item data
        const menuItemsData = json?.data?.cards.find(x => x.groupedCard)?.
            groupedCard?.cardGroupMap?.REGULAR?.
            cards?.map(x => x.card?.card)?.
            filter(x => x['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")?.
            map(x => x.itemCards).flat().map(x => x.card?.info) || [];

        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
            if (!uniqueMenuItems.find(x => x.id === item.id)) {
                uniqueMenuItems.push(item);
            }
        })
        setMenuItems(uniqueMenuItems);
    }


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
                {/* {console.log(menuItems)} */}
            <h1>Menu</h1>
                <ul>{Object.values(menuItems).map((item)=>(
                    <li key={item.id}> {item.name}</li>
                ))}</ul>
        </div>
        </div>
    );
};

export default RestaurantMenu

