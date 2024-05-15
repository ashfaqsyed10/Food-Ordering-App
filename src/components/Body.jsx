import RestrauntCard from "./RestrauntCard";
import { useEffect, useState, } from "react";

import { Link } from 'react-router-dom';
import Shimmer from "./Shimmer";

const Body = () => {
    const [listofrestraunts, setListofrestraunts] = useState([]);
    const [filteredrestraunts, setFilteredrestraunts] = useState([]);
    const [searchtext, setSearchtext] = useState();

    useEffect(() => {
        lala();
    }, []);

    const lala = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListofrestraunts(restaurants);
        setFilteredrestraunts(restaurants);
        console.log(restaurants)
        
    };

    return (
        <>
        <div className="restaurant-list mx-32">
            <div className="bg-white m-3 p-3">
                <input className="px-60 py-2 border border-gray-500 rounded-md font-semibold"
                    type="text"
                    placeholder="search for Restaurants"
                    value={searchtext}
                    onChange={(e) => {
                        setSearchtext(e.target.value);
                    }}
                />
                <button className="px-2 mx-1"
                    onClick={() => {
                        const filteredRestaurants = listofrestraunts.filter((restaurant) =>
                            restaurant.info.name.toLowerCase().includes(searchtext.toLowerCase())
                        );
                        setFilteredrestraunts(filteredRestaurants);
                    }}
                >
                    Click
                </button>
                <h1 className=" text-2xl font-bold pt-12 pb-0 mb-0">Restaurants with online food delivery in Hyderabad</h1>

            </div>
            {listofrestraunts.length === 0 ? (
                <Shimmer />
            ) : (
                <div className="kals">
                {filteredrestraunts.map((restaurant) =>(
        <Link key={restaurant.info.id}
         to ={"/restaurants/"+ restaurant.info.id}><RestrauntCard resData={restaurant}  /></Link>
      ))}
                </div>
            )}
            </div>
    </>
    );

};

export default Body