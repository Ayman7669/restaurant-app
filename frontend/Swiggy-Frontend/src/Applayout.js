import react, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
// import Body from "./component/Body";
import Footer from "./component/Footer";
// import Button from "./component/Button";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/userContext";
import useOnlineStatus from "./utils/useOnlineStatus";
import Offline from "./component/Offline";
import HotelListContext from "./utils/HotelListContext";

const AppLayout = () => {
  const isOnline = useOnlineStatus();
  const [hotelList, setHotelList] = useState();
  const [filteredHotelList, setFilteredHotelList] = useState();
  return (
    <div>
      <HotelListContext.Provider
        value={{
          hotelList,
          setHotelList,
          filteredHotelList,
          setFilteredHotelList,
        }}
      >
        <UserContext.Provider
          value={{ name: "Ayman", email: "ayman@gmail.com" }}
        >
          <Header />

          {isOnline ? <Outlet /> : <Offline />}
          <Footer />
        </UserContext.Provider>
      </HotelListContext.Provider>
    </div>
  );
};

export default AppLayout;
