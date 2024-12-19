import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-orange-300">
      {/* side Bar */}
      <div className="w-1/5">
        <ul>
          <button className="btn disabled rounded-none btn-info w-full">Admin Dashboard</button>
          <Link to={'/dashboard/addItem'}>
            <button className="btn rounded-none btn-info w-full">Add Product</button>
          </Link>
          <Link to={'/dashboard/manageItem'}>
            <button className="btn rounded-none btn-info w-full">Manage Item</button>
          </Link>
          <Link to={'/dashboard/allUsers'}>
            <button className="btn rounded-none btn-info w-full">All Users</button>
          </Link>
          <Link to={'/'}>
            <button className="btn rounded-none btn-info w-full">Home</button>
          </Link>
        </ul>
      </div>
      {/* Main Contents */}
      <div className="bg-orange-400 w-full max-auto text-center">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
