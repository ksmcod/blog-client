import { NavLink } from "react-router-dom";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { MdOutlineAccountCircle, MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import logo from "../assets/b.png";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState(false);

  const user = useSelector((state) => state.current_user);

  return (
    <div className="w-screen shadow-md">
      <header className="max-w-4xl mx-auto hidden sm:flex justify-between items-center p-4 border-b sm:border-none relative">
        <NavLink to="/" className="text-slate-700 text-2xl font-bold">
          <img src={logo} className="w-8" alt="" />
        </NavLink>

        {!user && (
          <nav className="space-x-4 flex">
            <NavLink
              to="/login"
              className="text-primary flex items-center gap-1"
            >
              <IoMdLogIn className="text-xl" />
              <span>Login</span>
            </NavLink>

            <NavLink
              to="/register"
              className="text-primary flex items-center gap-1"
            >
              <IoMdLogIn className="text-xl" />
              <span>Register</span>
            </NavLink>
          </nav>
        )}
        {user && (
          <nav className="relative">
            <button
              className="text-primary text-3xl"
              onClick={() => setNav(!nav)}
            >
              <MdOutlineAccountCircle />
            </button>

            {nav && (
              <ul className="bg-white absolute top-10 shadow-lg border">
                <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-slate-100">
                  <IoMdLogOut />
                  <span>Logout</span>
                </li>
              </ul>
            )}
          </nav>
        )}
      </header>

      {/* MOBILE MENU */}
      <header className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-slate-700 text-2xl font-bold">
            <img src={logo} className="w-8" alt="" />
          </NavLink>

          <button className="text-3xl font-bold" onClick={() => setMenu(!menu)}>
            {menu ? <AiOutlineClose /> : <MdOutlineMenu />}
          </button>
        </div>

        {menu && (
          <ul className="flex flex-col py-2 bg-blue-50">
            <li
              className="flex justify-center py-1 hover:bg-blue-100 active:bg-blue-300"
              onClick={() => setMenu(!menu)}
            >
              <NavLink
                to="/login"
                className="text-primary flex justify-center items-center gap-1 w-full h-full"
              >
                <IoMdLogIn className="text-xl" />
                <span>Login</span>
              </NavLink>
            </li>
            <li
              className="flex justify-center py-1 hover:bg-blue-100 active:bg-blue-300"
              onClick={() => setMenu(!menu)}
            >
              <NavLink
                to="/register"
                className="text-primary flex justify-center items-center gap-1 w-full h-full"
              >
                <IoMdLogIn className="text-xl" />
                <span>Register</span>
              </NavLink>
            </li>
          </ul>
        )}
      </header>
    </div>
  );
}
