import React, { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

// Component to navigate to the login page if user is not logged in but tries to access protected routes
export default function Navigator() {
  const navigate = useNavigate();

  function forward() {}

  useEffect(() => {
    <Navigate to={"/login"} />;
  }, []);
  return <Navigate to={"/login"} />;
}
