import { Link } from "react-router-dom";
import {img_URL , gro_URL} from "../utils/constants";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontSize: "24px" }}>
      <h1>Welcome to the Home Page of Swiggy</h1>
      <p>This is the home page content.</p>

      <div className="header-container-btn">
        <Link to={"/restaurant"}>
          <img src={img_URL} alt="Restaurant" className="header-img" />

          <button className="header-btn">Restaurant</button>
        </Link>
        <Link to={"/grocery"}>
          <img src={gro_URL}  alt="Grocery" className="header-img" />
          <button className="header-btn">Grocery</button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
