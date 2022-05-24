import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-3xl font-bold text-purple-500">
          Welcome to your Dashboard
        </h2>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Appointments</Link>
          </li>
          <li>
            <Link to="/dashboard/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/dashboard/history">History</Link>
          </li>
          {admin && (
            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;