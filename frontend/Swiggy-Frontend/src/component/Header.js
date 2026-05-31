import react, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { brand_URl } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import HotelListContext from "../utils/HotelListContext";

const Header = () => {
  const [islogin, setislogin] = useState(false);
  const isOnline = useOnlineStatus();
  const Usercontext = useContext(UserContext);
  const { name } = useContext(UserContext);
  const [input, setInput] = useState("");

  const { hotelList, setHotelList, filteredHotelList, setFilteredHotelList } =
    useContext(HotelListContext);
  console.log("hotel list from header component", hotelList);
  return (
    <div className="header">
      <div className="logo-container">
        <Link to={"/restaurant"}>
          <img
            className="header-logo"
            src="https://ik.imagekit.io/acrrubsd0/Untitled%20design.png?updatedAt=1770381393453"
          />
        </Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          value={input}
          placeholder="search the restaurant..."
          className="search"
          onChange={(e) => {
            const value = e.target.value; // ✅ capture new value first
            setInput(value);

            const filteredHotelList = hotelList.filter(
              (hotel) =>
                hotel.info.name.toLowerCase().includes(value.toLowerCase()), // ✅ use value, not input // minor mistake set
            );

            setFilteredHotelList(filteredHotelList);
          }}
        />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          {isOnline ? (
            <li
              className="list"
              style={{
                backgroundColor: "green",
                color: "white",
                boxShadow: " 0px 0px 28px 2px rgba(0, 0, 0, 0.141)",
              }}
            >
              🟢 Online
            </li>
          ) : (
            <li
              className="list"
              style={{
                backgroundColor: "red",
                color: "white",
                boxShadow: " 0px 0px 28px 2px rgba(0, 0, 0, 0.141)",
              }}
            >
              🔴 Offline
            </li>
          )}

          <Link to="/restaurant">
            <li className="list" style={{ textDecoration: "none" }}>
              Home
            </li>
          </Link>
          <Link to={"/grocery"}>
            <li className="list">Grocery</li>
          </Link>

          <Link to="/about">
            <li className="list" style={{ textDecoration: "none" }}>
              About Us
            </li>
          </Link>
          <Link to="/contact">
            <li className="list" style={{ textDecoration: "none" }}>
              Contact Us
            </li>
          </Link>
          <Link to="/cart">
            <li className="list" style={{ textDecoration: "none" }}>
              Cart
            </li>
          </Link>
          {islogin ? (
            <li
              className="list"
              onClick={() => {
                setislogin(!islogin);
              }}
            >
              login
            </li>
          ) : (
            <li
              className="list"
              onClick={() => {
                setislogin(!islogin);
              }}
            >
              logout
            </li>
          )}
          <li>{name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
