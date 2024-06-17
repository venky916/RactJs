import { useState } from "react"
import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"


function filterData(searchText, restaurants) {
    const filteredData= restaurants.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
}


//map  is best way to do in functional programming rather than (for loop or foreach) best practice
const Body = () => {
    // let searchText ="KFC";normal js variable

    //useState()=>return array, searchText is a local state variable
    const [searchText, setSearchText] =useState("");//To create state variable

    // const [searchclicked,setSearchclicked] = useState('false');
    const [restaurants, setRestaurants] = useState(restaurantList);
    return (
        <>
        <div className="search-container">
                <input type="text" 
                className="search-input" 
                placeholder="Search...." 
                value={searchText}
                onChange={(e)=>{
                setSearchText(e.target.value);
                }}/>

                {/* <h1>{searchclicked}</h1>
                 <button className="search-btn"
                onClick={()=>{
                    if(searchclicked ==="true"){
                        setSearchclicked('false');
                    }else{
                        setSearchclicked('true');
                    }
                }}
                >Search</button> */}
                <button className="search-btn"
                    onClick={() => {
                        //need to filter the data
                        //update the state - restaurants
                        const data = filterData(searchText, restaurants);
                        console.log(data);
                        setRestaurants(data);
                    }}
                >Search</button>
                
        </div>
        <div className='restaurant-list'>
            {
                restaurants.map((restaurant) => {
                    return ( 
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    )
                })
            }
        </div>
        </>
    )
}



export default Body