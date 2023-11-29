import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import Navigator from "./Navigator";

export default function Private() {
  const navigate = useNavigate();
  const current_user = useSelector((state) => state.current_user);

  return current_user ? <Outlet /> : <Navigate to={"/login"} replace />;
}
