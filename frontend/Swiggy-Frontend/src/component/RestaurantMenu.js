import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuInfo from "./RestaurantMenuInfo";
import MenuItem from "./MenuItem";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [menu, setMenu] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [showItems, setshowItems] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=" +
          resId,
      );
      const json = await response.json();
      setMenu(json.data.cards[2].card.card);
      setMenuItems(json.data.cards);
    };
    fetchMenu();
  }, []);

  if (!menu) return <h1>Loading...</h1>;

  const categoriesArr =
    menuItems[5].groupedCard.cardGroupMap.REGULAR.cards.filter((category) => {
      // console.log(category.card.card["@type"]);
      return (
        category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  // console.log("this is category array", categoriesArr);
  // console.log("this is map array", categoriesArr[0].card);
  return (
    <div>
      {/* <h1>Restaurant Menu</h1> */}
      {/* by using useParams resId can be 
      fetched and accessed <h1>{resId}</h1> */}
      <RestaurantMenuInfo menuInfo={menu.info} />

      {/* <h2>Menu Items</h2>
      {menuItems.map((item) => (
        <div key={item.card.info.id}>
          <MenuItem {...item.card.info} />
        </div>
      ))} */}
      {categoriesArr.map((categoryObj, index) => {
        return (
          <RestaurantCategory
            key={categoryObj.card.card.categoryId}
            category={categoryObj.card.card}
            command={index == showItems ? true : false}
            setIndex={() => {
              setshowItems(index === showItems ? null : index);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
