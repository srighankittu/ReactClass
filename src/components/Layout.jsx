import React from "react";
import TopNav from "./TopNav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
};

//HW -> Button -> onClick --> Navigate
// Hw -> Footer --> Ensure taht footer is displayed in all pages
export default Layout;
