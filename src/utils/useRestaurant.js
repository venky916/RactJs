import { useState,useEffect } from "react";

export const useRestaurant = ()=>{
    const [allRestaurants, setAllRestaurants] = useState([]);

    // get data from api
    useEffect(() => {
        // API Call
        getRestaurants();
    }, [])

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants);
    }
    // return restaurant data
    return allRestaurants
};

export default useRestaurant