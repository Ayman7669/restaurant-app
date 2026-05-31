const RestaurantMenuInfoCard = ({ menuInfo }) => {
  const {
    name,
    avgRatingString,
    city,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
  } = menuInfo;
  return (
    <div className="menuInfo-container">
      <h1>{name}</h1>
      <h2>{city}</h2>
      <p>
        {avgRatingString} ({totalRatingsString}) • {costForTwoMessage}
      </p>
      <p>{cuisines?.join(", ")}</p>
    </div>
  );
};

export default RestaurantMenuInfoCard;
