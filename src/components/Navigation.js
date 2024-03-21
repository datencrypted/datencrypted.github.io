import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = ({ handleLogout, token }) => {
  return (
    <div className="navigation">
      {!token ? (
        <ul className="Login">
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/leaderboard"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Register
            </NavLink>
          </li>
        </ul>
      ) : (
        <>
          <ul className="logged_nav">
            <li>
              <NavLink to="/" className={"logout"} onClick={handleLogout}>
                Logout
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/encounter"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Encounter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/captured"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                PcBox
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/list"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/leaderboard"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Leaderboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
          </ul>
        </>
      )}
      <></>
    </div>
  );
};

export default Navigation;
