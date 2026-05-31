<<<<<<< HEAD
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import resArr from "../utils/dummydata.js";
=======
import React, { useEffect, useState } from "react";
// import resArr from "../utils/dummydata.js";
>>>>>>> feature/frontend-updates
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import HotelListContext from "../utils/HotelListContext.js";
import Button from "./Button.js";

const Body = () => {
<<<<<<< HEAD
  const { hotelList, setHotelList, filteredHotelList, setFilteredHotelList } =
    useContext(HotelListContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.38430&lng=78.45830&carousel=true&third_party_vendor=1",
      );
      const json = await response.json();
      console.log("Length of JSON", json.data.cards.length);

      ///checking if length is 12 then 11 will be fetched ,
      ///if 10 then less then 10 is 9

      if (json.data.cards.length > 12) {
        setHotelList(
          json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        );
        setFilteredHotelList(
          json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        );
      } else {
        setHotelList(
          json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        );
        setFilteredHotelList(
          json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        );
      }
      console.log("this is hotel list from context", hotelList);
    };

    fetchData();
  }, []);

  console.log("Hotel List:", hotelList);

  if (!hotelList) {
    return <Shimmer />;
  }

  return (
    <div className="restaurant-container">
      <Button />
      {filteredHotelList.map((restaurant) => {
        return (
          <Link
            className="Links"
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            <RestaurantCard
              key={restaurant.info.id}
              resdata={restaurant.info}
            />
          </Link>
        );
      })}
    </div>
  );
};

=======
  const [resArr, setresArr] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("http://localhost:8080/restaurant");
      const data = await response.json();
      console.log(data);
      setresArr(data);
    };
    fetchdata();
  }, []);
  return (
    <div className="restaurant-container">
      {resArr.map((res) => (
        <RestaurantCard key={res.id} resdata={res} />
      ))}
    </div>
  );
};
>>>>>>> feature/frontend-updates
export default Body;
