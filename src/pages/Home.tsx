"use client";

import type React from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/home.css";

export const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>
          Plan Your Event With <span className="seprate">Ease</span>
        </h1>
        <p>
          Create, manage, and organize your events in one beautiful platform.
          From personal gatherings to professional conferences, EventPlanner has
          you covered.
        </p>

        {isAuthenticated ? (
          <Link to="/events" className="btn btn-primary btn-large">
            Go to Events
          </Link>
        ) : (
          <div className="home-links">
            <Link to="/login" className="btn btn-primary btn-large">
              Login
            </Link>
            <Link to="/register" className="btn btn-secondary btn-large">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
