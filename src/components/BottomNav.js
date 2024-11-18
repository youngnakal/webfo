import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaCoins, FaSpinner, FaUserFriends, FaUser } from "react-icons/fa";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <FaHome size={24} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/earn" className={({ isActive }) => (isActive ? "active" : "")}>
        <FaCoins size={24} />
        <span>Earn</span>
      </NavLink>
      <NavLink to="/spin" className={({ isActive }) => (isActive ? "active" : "")}>
        <FaSpinner size={24} />
        <span>Spin</span>
      </NavLink>
      <NavLink to="/friend" className={({ isActive }) => (isActive ? "active" : "")}>
        <FaUserFriends size={24} />
        <span>Friend</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
        <FaUser size={24} />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}

export default BottomNav;
