import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

export default function Private() {
  const navigate = useNavigate();
  const current_user = useSelector((state) => state.current_user);

  return current_user ? <Outlet /> : navigate("/login");
}
