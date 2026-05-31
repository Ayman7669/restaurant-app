import React from "react";
import ReactDOM from 'react-dom/client';

const base_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = ({ resdata }) => {
  const { resName, cuisine, avgRating, delieveryTime, costForTwo, imgId } = resdata;
  
  return (
    <div className="restaurant-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={`${base_URL}${imgId}`}
      />
      <div className="card-details">
        <h3 className="res-title">{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>{avgRating}</h4>
        <h4>{delieveryTime} mins | {costForTwo} for two</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;