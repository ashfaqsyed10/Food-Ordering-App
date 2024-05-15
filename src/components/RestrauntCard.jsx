const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    sla, locality,

  } = resData?.info;
  return (
    <div className="m-3 px-3 py-3 w-[220px] h-[340px] rounded-lg bg-gray-50 hover:bg-gray-200">
      <img
        className="w-96 h-[145px] rounded-xl"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <div className='font-medium flex justify-between mr-3'>
        <h4>⭐{avgRating}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
      <h4 className="font-light">{cuisines.join(", ")}</h4>

      <h4 className="font-light">{locality}</h4>

    </div>
  );
};
export default RestaurantCard