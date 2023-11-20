import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/b.png";

export default function Footer() {
  return (
    <div className="px-8 py-6 bg-blue-400 flex items-center gap-10 flex-wrap">
      <NavLink to="/" className="text-slate-700 text-2xl font-bold">
        <img src={logo} className="w-8" alt="" />
      </NavLink>

      <div className="text-white">
        <span>&copy; Blogg. All rights reserved</span>
      </div>

      <ul className="text-white"></ul>
    </div>
  );
}
