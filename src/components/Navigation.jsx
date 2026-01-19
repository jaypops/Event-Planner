"use client";

import { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/navigation.css";
import Logo from "./Logo";
import { LogOut, Menu, X } from "lucide-react";

export const Navigation = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const fullName = user?.name.split(" ");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="logo">
          <Logo />
          <Link to="/" className="navbar-brand">
            Event Planner
          </Link>
        </span>

        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <div className={`navbar-menu ${isMenuOpen ? "navbar-menu-open" : ""}`}>
          {isAuthenticated ? (
            <>
              <div className="navbar-user">
                <span className="user-name">Welcome, {fullName?.[0]}</span>
                <button onClick={logout} className="btn btn-secondary btn-sm">
                 <LogOut /> Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`nav-link ${
                  location.pathname === "/login" ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                Login
              </Link>
              <Link
                to="/register"
                className={`nav-link ${
                  location.pathname === "/register" ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
