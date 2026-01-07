import React from "react";

const DashboardHeader = () => {
  const username = localStorage.getItem("username");
  return (
    <div className="dashboard-header">
      <div className="header-content">
        <div className="welcome-text">
          <h1>Hello {username}</h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
