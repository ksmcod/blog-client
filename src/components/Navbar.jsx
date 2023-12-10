import { Link, NavLink } from "react-router-dom";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { MdOutlineAccountCircle, MdOutlineMenu } from "react-icons/md";
import { TbPencilPlus } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import logo from "../assets/b.png";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState(false);

  const user = useSelector((state) => state.current_user);

  return (
    <div className="w-screen shadow-md">
      <header className="max-w-5xl mx-auto hidden sm:flex justify-between items-center p-4 border-b sm:border-none relative">
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
          <div className="flex items-center gap-5">
            <Link to={"/new-blog"} className="text-3xl text-primary">
              <TbPencilPlus />
            </Link>

            <Link to={"/profile"} className="text-3xl text-primary">
              <MdOutlineAccountCircle />
            </Link>
          </div>
        )}
      </header>

      {/* MOBILE MENU */}
      <header className="p-4 flex sm:hidden flex-col gap-2">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-slate-700 text-2xl font-bold">
            <img src={logo} className="w-8" alt="" />
          </NavLink>

          <button className="text-3xl font-bold" onClick={() => setMenu(!menu)}>
            {menu ? <AiOutlineClose /> : <MdOutlineMenu />}
          </button>

          {/* {user && (
            <nav className="flex items-center gap-2">
              <Link to={"/new-blog"} className="text-3xl text-primary">
                <TbPencilPlus />
              </Link>
              <Link to={"/profile"} className="text-3xl text-primary">
                <MdOutlineAccountCircle />
              </Link>
            </nav>
          )} */}
        </div>

        {menu && !user && (
          <ul className="flex flex-col py-2 bg-blue-50">
            <li
              className="flex justify-center py-1 hover:bg-blue-100 active:bg-blue-300"
              onClick={() => setMenu(!menu)}
            >
              <Link
                to="/login"
                className="text-primary flex justify-center items-center gap-1 w-full h-full"
              >
                <IoMdLogIn className="text-xl" />
                <span>Login</span>
              </Link>
            </li>
            <li
              className="flex justify-center py-1 hover:bg-blue-100 active:bg-blue-300"
              onClick={() => setMenu(!menu)}
            >
              <Link
                to="/register"
                className="text-primary flex justify-center items-center gap-1 w-full h-full"
              >
                <IoMdLogIn className="text-xl" />
                <span>Register</span>
              </Link>
            </li>
          </ul>
        )}

        {menu && user && (
          <ul className="flex flex-col py-2 bg-blue-50">
            <li
              className="flex justify-center py-1 hover:bg-blue-100 active:bg-blue-300"
              onClick={() => setMenu(!menu)}
            >
              <Link
                to={"/profile"}
                className="text-primary flex justify-center items-center gap-1 w-full h-full"
              >
                <MdOutlineAccountCircle className="text-2xl" />
                <span className="">Profile</span>
              </Link>
            </li>
            <li
              className="flex justify-center py-1 hover:bg-blue-100 active:bg-blue-300"
              onClick={() => setMenu(!menu)}
            >
              <Link
                to={"/new-blog"}
                className="text-primary flex justify-center items-center gap-1 w-full h-full"
              >
                <TbPencilPlus className="text-2xl" />
                <span className="">New blog</span>
              </Link>
            </li>
          </ul>
        )}
      </header>
    </div>
  );
}
