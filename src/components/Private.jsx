import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function Private() {
  const current_user = useSelector((state) => state.current_user);

  return current_user ? <Outlet /> : <Navigate to={"/login"} replace />;
}
