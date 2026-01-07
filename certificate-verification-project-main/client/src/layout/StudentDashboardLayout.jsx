import React from "react";
import { FaBars, FaDownload } from "react-icons/fa";
// import Sidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom";
import StudentSidebar from "../components/StudentSidebar";

const StudentDashboardLayout = () => {
  return (
    <>
      <div className="container-fluid p-0 d-flex min-vh-100">
        {/* sidebar  */}
        <StudentSidebar />

        {/* MAIN CONTENT */}
        <div className="flex-fill">
          {/* MOBILE TOP BAR */}
          <div className="p-2 d-md-none d-flex align-items-center text-white bg-success">
            <button
              className="btn text-white fs-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#bdSidebar"
            >
              <FaBars />
            </button>
            <span className="ms-3 fs-4">Certify</span>
          </div>

          {/* PAGE CONTENT */}
          <div className="p-4">
            {/* <div className="d-flex justify-content-center align-items-center text-bg-light">
            <h2>Welcom to Cirtify</h2>
            </div>
            <hr /> */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboardLayout;
