import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import { Route } from "react-router";
import Posts from "./posts";
import Users from "./users";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Sidebar></Sidebar>
      <Route path="/admin/users" component={Users}></Route>
      <Route path="/admin/posts" component={Posts}></Route>
        
    </div>
  );
};

export default Dashboard;
