import React from "react";
import { FaHome, FaBell, FaChartBar, FaStar, FaSignOutAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../auth/logout";
const Sidebar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  // LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.clear(); // clear auth/session data
    navigate("/"); // redirect to HOME page
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
          {/* <FaChartBar className="me-2" />  */}
          {username ? `${username}` : "Certify Portal"}
        </h5>
      </div>

      <hr />

      {/* NAV LINKS */}
      <ul className="nav  flex-column mb-auto">
        <li className="nav-item mb-1">
          <NavLink
            to="/admin"
            className={({ isActive }) => `nav-link text-white ${isActive ? "active" : ""}`}
          >
            <FaHome className="me-2" /> Dashboard
          </NavLink>
        </li>

        <li className="nav-item mb-1">
          <NavLink to="manage-student" className="nav-link text-white d-flex align-items-center">
            <FaBell className="me-2" />
            ManageStudent
            <span className="badge bg-primary ms-auto"></span>
          </NavLink>
        </li>

        <li className="nav-item mb-1">
          <NavLink to="upload-student" className="nav-link text-white">
            <FaChartBar className="me-2" /> Upload Student
          </NavLink>
        </li>

        <li className="nav-item mb-1">
          <NavLink to="verify-certificate" className="nav-link text-white">
            <FaStar className="me-2" /> Verify Certificate
          </NavLink>
        </li>
      </ul>

      {/* LOGOUT SECTION */}
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

export default Sidebar;
