import React from "react";
import Sidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom";
import { FaBars, FaDownload } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToHash from "../components/ScrollToHash";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <ScrollToHash />
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default AppLayout;