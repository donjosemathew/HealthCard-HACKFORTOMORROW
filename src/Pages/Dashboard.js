import React from "react";
import DashboardSection from "../Components/Dashboard/dashboardSections";
import Nav from "../Components/Nav/nav";
import "../styles/style.scss";
import { AuthContext } from "../context/auth";
import { Redirect } from "react-router-dom";
const Dashboard = () => {
  return (
    <AuthContext.Consumer>
      {({ user, load, SignIn, SignOut, newuser }) =>
        !load ? (
          user ? (
            <div className="home relative">
              <Nav image={user.photo} SignOut={SignOut} />
              <DashboardSection
                newuser={newuser}
                uid={user.uid}
                name={user.name}
              />
            </div>
          ) : (
            <Redirect to={"/"} />
          )
        ) : (
          ""
        )
      }
    </AuthContext.Consumer>
  );
};

export default Dashboard;
