import React from "react";
import { Outlet } from "react-router-dom";
import Search from "./Search";
import Navbar from "./Navbar";

function RootLayout() {
  return (
    <>
      <Navbar />
      <Search />
      <Outlet />
    </>
  );
}

export default RootLayout;
