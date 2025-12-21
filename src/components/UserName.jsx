import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const UserName = () => {
  const { user } = useContext(AppContext);
  return <div>{user}</div>;
};

export default UserName;
