import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Card = (props) => {
  const { resData } = props;
  const {loggedInUser} = useContext(UserContext)

  const {
    info: {
      name,
      cloudinaryImageId,
      costForTwo,
      cuisines,
      avgRating,
      slaString,
    },
  } = resData;

  return (
    <div className="w-[200] bg-gray-100 hover:bg-gray-300 p-2 m-2 h-[380] rounded-md">
      <div className="P-4">
        <div className="w-45 bg-white rounded-md shadow-md h-48 w-full">
          <img
            className="h-full w-full object-cover border rounded "
            alt="biryani"
            src={CDN_URL + cloudinaryImageId}
          />
        </div>
        <h3 className="font-bold text-lg py-1">{name}</h3>
        <h5>{cuisines.slice(0, 7).join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
        <h5>{slaString}</h5>
        <h5>{loggedInUser}</h5>
      </div>
    </div>
  );
};

export const openCard = (Card) => {
  return (props) => {
    return(
      <div>
      <label className="absolute bg-slate-900 text-white m-3 px-2 rounded-lg">Open</label>
      <Card {...props}/>
      </div>
    );
  };
};


export default Card;
