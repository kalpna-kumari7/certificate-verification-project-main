import React from "react";
import { FaHome, FaBell, FaChartBar, FaStar, FaUser, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { logout } from "../auth/logout";
const StudentSidebar = () => {
  // LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div
      id="bdSidebar"
      className="d-flex flex-column flex-shrink-0 p-3 bg-success text-white offcanvas-md offcanvas-start"
      style={{ width: "280px" }}
    >
      {/* BRAND */}
      <div className="navbar-brand text-white mb-3">
        <h5 className="fs-2 d-flex align-items-center">
          <FaChartBar className="me-2" /> Certify
        </h5>
      </div>

      <hr />

      {/* NAV LINKS */}
      <ul className="nav flex-column mb-auto">
        <li className="nav-item mb-1">
          <NavLink
            to={"/student"}
            className={({ isActive }) => `nav-link text-white ${isActive ? "active" : ""}`}
          >
            <FaHome className="me-2" /> Dashboard
          </NavLink>
        </li>

        <li className="nav-item mb-1">
          <NavLink to={"download"} className="nav-link text-white d-flex align-items-center">
            <FaBell className="me-2" />
            Download Certificate
          </NavLink>
        </li>

        <li className="nav-item mb-1">
          <NavLink to={"verify"} className="nav-link text-white">
            <FaStar className="me-2" /> Verify Certificate
          </NavLink>
        </li>
      </ul>

      {/* LOGOUT SECTION (BOTTOM) */}
      <div className="d-flex align-items-center mt-auto">
        <FaSignOutAlt size={28} className="me-3 text-light" />

        <button
          className="btn btn-link text-light text-decoration-none p-0 text-start"
          onClick={() => logout()}
        >
          <h6 className="mb-0">Logout</h6>
          <small>Sign out</small>
        </button>
      </div>
    </div>
  );
};

export default StudentSidebar;
