import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useEffect, useState } from "react";
import { menu } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // try {
    const data = await fetch(menu + resId);
    const json = await data.json();
    setResInfo(json.data);
    // console.log(json)
    // } catch (error) {
    // console.error('Error fetching menu:', error);
    // }
  };

  // Destructuring with default values to handle undefined properties
  const {
    name,
    cuisines = [],
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info || {};

  // Check for undefined properties
  const cuisinesList =
    cuisines.length > 0 ? cuisines.join(", ") : "No cuisines available";

  const itemCard =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) => e.card?.card?.["@type"]
    );

  // console.log(categories);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center text-gray-700 cursor-pointer mt-28">
      <h1 className="text-2xl m-5 font-bold">{name}</h1>
      <p className="text-xl font-semibold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={index}
          showItems={index === showIndex ? true : false}
          setShowIndex={() =>
            showIndex === index ? setShowIndex(null) : setShowIndex(index)
          }
          data={category}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
