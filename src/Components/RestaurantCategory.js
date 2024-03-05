import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  if (!props.data?.card?.card?.title) {
    return null;
  }

  if (!props.data?.card?.card?.itemCards) {
    return null;
  }

  const clickHandler = () => {
    props.setShowIndex();
  };
  //   console.log(props.data?.card?.card?.itemCards);
  const items = props.data?.card?.card?.itemCards;
  //   const item = item
  return (
    <div className="text-gray-700" >
      <div className=" w-6/12 m-auto bg-black-500 shadow-xl my-4 p-4 ">
        <div className="flex justify-between" onClick={clickHandler}>
          <h1 className="font-bold" >
            {props.data?.card?.card?.title}(
            {props.data?.card?.card?.itemCards.length})
          </h1>
          <p>⬇️</p>
        </div>
        {props.showItems && <ItemList items={items} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
