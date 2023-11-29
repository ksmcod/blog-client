import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { useGetCurrentUserQuery } from "../app/services/userApi";
import { setUser } from "../features/user/userSlice";
import { useEffect } from "react";
import Footer from "../components/Footer";

export default function RootLayout() {
  const dispatch = useDispatch();
  const location = useLocation();

  const { isFetching, isLoading, data, refetch } = useGetCurrentUserQuery();

  useEffect(() => {
    console.log("Refetch ON!");
    refetch();
    dispatch(setUser(data));
  }, [location.key]);

  useEffect(() => {
    dispatch(setUser(data));
  }, [isFetching]);

  if (!isFetching) {
    return (
      <main className="space-y-10 min-h-screen flex flex-col justify-between">
        <Navbar />

        <div className="flex-1">
          <Outlet />
        </div>

        <footer className="">
          <Footer />
        </footer>
      </main>
    );
  }
}
