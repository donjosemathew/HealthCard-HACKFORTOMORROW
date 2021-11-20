import React from "react";
import DashboardSection from "../Components/Dashboard/dashboardSections";
import Nav from "../Components/Nav/nav";
import "../styles/style.scss";
const Dashboard = () => {
  return (
    <div className="home">
      <Nav />
      <DashboardSection />
    </div>
  );
};

export default Dashboard;
