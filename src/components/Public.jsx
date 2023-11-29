import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function Public() {
  const current_user = useSelector((state) => state.current_user);

  if (!current_user) return <Outlet />;
}
