import React from "react";
import { createContext } from "react";

const UserContext = React.createContext({
  name: "Default",
  email: "default@gmail.com",
});

export default UserContext;
