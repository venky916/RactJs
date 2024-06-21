import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
export const useRestaurantMenuData = (id) => {
    
    const [restaurant, setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);

    // get data from api
    useEffect(() => {
        getRestaurantsInfo();
    }, [])

    async function getRestaurantsInfo() {
        const data = await fetch( FETCH_MENU_URL + id);
        const json = await data.json();
        console.log(json);

        const restaurantData = json?.data?.cards[2]?.card?.card?.info || null;
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

    // return restaurant data
    return [restaurant,menuItems]
};

export default useRestaurantMenuData