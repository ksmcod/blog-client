import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { useGetCurrentUserQuery } from "../app/services/api";
import { setUser } from "../features/user/userSlice";
import { useEffect } from "react";

export default function RootLayout() {
  const dispatch = useDispatch();
  let location = useLocation();

  const { isFetching, isLoading, data, refetch } = useGetCurrentUserQuery();

  useEffect(() => {
    dispatch(setUser(data));
  }, [isFetching]);

  useEffect(() => {
    console.log("Refetch ON!");
    refetch();
  }, [location.key]);

  if (!isLoading) {
    return (
      <main className="space-y-10">
        <Navbar />
        <Outlet />
      </main>
    );
  }
}
