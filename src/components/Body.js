import { useState,useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./schimmerUI";
import {Link} from 'react-router-dom';

function filterData(searchText, restaurants) {
    const filteredData= restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
}


const Body = () => {
    const [allRestaurants, setAllRestaurants]= useState([]);
    const [fillteredRestaurants, setFillteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    

    useEffect(()=>{
        // API Call
        getRestaurants();
    }, [])



    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        // ?.restaurants);
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants);
        setFillteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants);
    }
    return (allRestaurants.length === 0)? <Shimmer />:(
        <>
        <div className="search-container">
                <input type="text" 
                className="search-input" 
                placeholder="Search...." 
                value={searchText}
                onChange={(e)=>{
                setSearchText(e.target.value);
                }}/>

                <button className="search-btn"
                    onClick={() => {
                        const data = filterData(searchText, allRestaurants);
                        setFillteredRestaurants(data);
                    }}
                >Search</button>
                
        </div>
        <div className='restaurant-list'>

            { 
                (fillteredRestaurants.length===0)?
                    (<h1> No Restauarnts mathched the Filter.....</h1>)
                :(
                    fillteredRestaurants.map((restaurant) => {
                        return (
                            <Link to={"/restaurant/"+ restaurant?.info?.id} key={restaurant?.info?.id} >
                            <RestaurantCard {...restaurant.info} />
                            </Link>
                        )
                    })
                )
                
            }
        </div>
        </>
    )
}



export default Body