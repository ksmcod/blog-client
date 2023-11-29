import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navigator from "./Navigator";

export default function Private() {
  const current_user = useSelector((state) => state.current_user);

  return current_user ? <Outlet /> : <Navigator />;
}
