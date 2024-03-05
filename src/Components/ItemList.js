import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ( {items}) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" items-center flex justify-between my-5 mx-2  p-4 border-t-2"
        >
          <div className="text-left ">
            {item.card.info.itemAttribute.vegClassifier === "VEG" ? (
              <span>🟢</span>
            ) : (
              <span>🔴</span>
            )}
            <div className="font-bold text-gray-700 text-base ">
              {item.card.info.name}
            </div>
            <span className="">₹{item.card.info.price / 100}</span>
            <p className="text-sm font-thin">{item.card.info.description}</p>
          </div>
          <div>
            {item.card.info.imageId ? (
              <div className="p-4">
                <div className="absolute">
                  <button className="hover:bg-slate-300 ml-6 mt-20 font-bold text-green-600 bg-white border border-gray-300 rounded-lg shadow-lg py-1.5 px-6"
                  onClick={() => handleAddItem(item)}
                  >
                    ADD
                  </button>
                </div>
                  <img
                    src={CDN_URL + item.card.info.imageId}
                    className="w-32 rounded-lg"
                  />
              </div>
            ) : (
              <span className=" hover:bg-slate-300 font-bold text-green-600 bg-white border rounded-lg shadow-lg py-1.5 px-6 mr-9 "
              onClick={() => handleAddItem(item)} >
                ADD
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
