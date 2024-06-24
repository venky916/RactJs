import { useState, useEffect,useContext } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./schimmerUI";
import { Link } from 'react-router-dom';
import { filterData } from "../utils/helper";
import useRestaurant from "../utils/useRestaurant";
import useOnline  from "../utils/useOnline"
import userContext from "../utils/userContext";


const Body = () => {
    const [searchText, setSearchText] = useState("");
    const allRestaurants = useRestaurant();
    const [fillteredRestaurants, setFillteredRestaurants] = useState(null);
    const {user1,setUser1} = useContext(userContext);

    useEffect(() => {
        if (allRestaurants.length > 0) {
            setFillteredRestaurants(allRestaurants);
        }
    }, [allRestaurants]);

    const isOnline = useOnline();

    if (!isOnline){
        return <h1> Offline , Check your internet connnection</h1>;
    }

    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <>
            <div className="p-2 m-2 bg-blue">
                <input type="text"
                    className="focus:bg-green-200 text-purple-800"
                    placeholder="Search...."
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />

                <button className="p-2 m-2 bg-purple-800 text-white rounded-md hover:bg-purple-300"
                    onClick={() => {
                        const data = filterData(searchText, allRestaurants);
                        setFillteredRestaurants(data);
                    }}
                >Search</button>
                <label> name: </label>
                <input value={user1.name} onChange={(e)=>setUser1({
                    ...user1,
                    name:e.target.value
                })}/>
                <label>email: </label>
                <input value={user1.email} onChange={(e) => setUser1({
                    ...user1,
                    email: e.target.value
                })} />

            </div>
            <div className='flex flex-wrap'>
                {fillteredRestaurants === null || fillteredRestaurants.length === 0 ? (
                    <h1>No Restaurants matched the filter.....</h1>
                ) : (
                    fillteredRestaurants.map((restaurant) => (
                        <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
                            <RestaurantCard {...restaurant.info}  />
                        </Link>
                    ))
                )}

            </div>
        </>
    )
}

export default Body