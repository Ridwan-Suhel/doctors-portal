import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        {/* <!-- Page content here --> */}
        <div className="wrapper px-4">
          <h2 className="text-2xl text-primary">Welcome to dashboard.</h2>
          <Outlet></Outlet>
        </div>
        {/* <!-- Page content here --> */}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/review">My Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
