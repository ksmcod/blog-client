import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { useGetCurrentUserQuery } from "../app/services/api";
import { setUser } from "../features/user/userSlice";
import { useEffect } from "react";

export default function RootLayout() {
  const dispatch = useDispatch();
  let location = useLocation();

  const { isFetching, isSuccess, data } = useGetCurrentUserQuery();

  useEffect(() => {
    dispatch(setUser(data));
  }, [isFetching]);

  if (!isFetching) {
    return (
      <main className="space-y-10">
        <Navbar />
        <Outlet />
      </main>
    );
  }
}
