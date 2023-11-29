import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { useGetCurrentUserQuery } from "../app/services/userApi";
import { setUser } from "../features/user/userSlice";
import Footer from "../components/Footer";

export default function RootLayout() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [waiter, setWaiter] = useState(false);

  const { isFetching, isLoading, data, refetch } = useGetCurrentUserQuery();

  const ping = async () => {
    console.log("Refetch ON!");
    const returnOfRefetch = await refetch().unwrap();
    console.log("Return of refetch: ", returnOfRefetch);
    console.log("Data in ping is: ", data);
    dispatch(setUser(returnOfRefetch));
    setWaiter(true);
  };

  useEffect(() => {
    ping();
  }, [location.key]);

  useEffect(() => {
    dispatch(setUser(data));
  }, [isFetching]);

  if (!isFetching && waiter) {
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
