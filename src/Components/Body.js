import Card, { openCard } from "./Card";
import { useContext, useEffect, useState } from "react";
import { swiggyApi } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [SearchInputText, setSearchInputText] = useState("");

  const CardIsOpen = openCard(Card);

  console.log(restaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(swiggyApi);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like you are offline!!!!!!!!!!!!</h1>;

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mt-28">
      {console.log(filteredRestaurant)}
      <div className="search">
        <input
          className="border border-solid m-4 border-black"
          value={SearchInputText}
          onChange={(e) => {
            setSearchInputText(e.target.value);
          }}
        />
        <button
          className="bg-green-200 px-4 py-0.5 m-1 border border-green-300 rounded-lg"
          onClick={() => {
            const filteredRestaurant = restaurantList.filter((res) =>
              res.info.name
                .toLowerCase()
                .includes(SearchInputText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="bg-red-200 px-4 py-0.5 m-1 border border-red-300 rounded-lg"
          onClick={() => {
            const filterList = restaurantList.filter(
              (res) => res.info.avgRating >= 4.2
            );
            setRestaurantList(filterList);
          }}
        >
          High rated restaurant
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <CardIsOpen resData={restaurant} />
            ) : (
              <Card resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
