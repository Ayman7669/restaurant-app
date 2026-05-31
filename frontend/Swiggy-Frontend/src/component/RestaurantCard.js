import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD

const base_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = ({ resdata }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    cloudinaryImageId,
    areaName,
    slaString,
  } = resdata;

  return (
    <div className="restaurant-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={base_URL + cloudinaryImageId}
      />
      <div className="card-details">
        <h3 className="res-title">{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>⭐{avgRating}</h4>
        <h4>
          {sla.deliveryTime} mins | {costForTwo}
        </h4>
        <h4>{areaName} | {sla.slaString}</h4>
        
=======
const base_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = ({ resdata }) => {
  const {
    resName,
    cuisine,
    avgRating,
    delieveryTime,
    costForTwo,
    location,
    imgId,
  } = resdata;
  return (
    <div className="restaurant-card">
      <img className="res-logo" alt="res-logo" src={base_URL + imgId} />
      <div className="card-details">
        <h3 className="res-title">{resName}</h3>
        <h4>{cuisine.join(" , ")}</h4> <h2>{location}</h2>
        <h4>{avgRating}</h4>
        <h4>
          {delieveryTime} mins | {costForTwo} for two
        </h4>
>>>>>>> feature/frontend-updates
      </div>
    </div>
  );
};
<<<<<<< HEAD

=======
>>>>>>> feature/frontend-updates
export default RestaurantCard;
