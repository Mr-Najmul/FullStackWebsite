import React from "react";
import { Link } from "react-router-dom";

const DashboardSideNav = ({ active, navType }) => {
  const UserNav = (
    <nav className="nav flex-column">
      <Link
        className={`nav-link text-light border-bottom ${
          active === "new-order" ? "bg-success" : "bg-warning"
        }`}
        aria-current="page"
        to="/"
      >
        <span className="px-3">
          <i className="fas fa-home"> </i>
        </span>
        New Order / Book
      </Link>
      <Link
        className={`nav-link text-light border-bottom ${
          active === "my-order" ? "bg-success" : "bg-warning"
        }`}
        aria-current="page"
        to="/order"
      >
        <span className="px-3">
          <i className="far fa-plus-square"></i>
        </span>
        My Booking
      </Link>
      <Link
        className={`nav-link text-light border-bottom ${
          active === "write-review" ? "bg-success" : "bg-warning"
        }`}
        aria-current="page"
        to="/order"
      >
        <span className="px-3">
          <i className="far fa-plus-square"></i>
        </span>
        Write Review
      </Link>
      <Link
        className={`nav-link text-light border-bottom ${
          active === "my-review" ? "bg-success" : "bg-warning"
        }`}
        aria-current="page"
        to="/myReview"
      >
        <span className="px-3">
          <i className="fas fa-th"></i>
        </span>
        My Review
      </Link>
    </nav>
  );

  const AdminNav = (
    <nav className="nav flex-column">
      <Link
        className={`nav-link text-light border-bottom ${
          active === "all-order" ? "bg-success" : "bg-warning"
        }`}
        aria-current="page"
        to="/admin/dashboard"
      >
        <span className="px-3">
          <i className="fas fa-home"> </i>
        </span>
        Manage Order / Booking
      </Link>
      <Link
        className={`nav-link text-light border-bottom ${
          active === "add-package" ? "bg-success" : "bg-warning"
        }`}
        aria-current="page"
        to="/admin/newPackage"
      >
        <span className="px-3">
          <i className="far fa-plus-square"></i>
        </span>
        Add New Package / Service
      </Link>
      <Link
        className={`nav-link text-light border-bottom ${
          active === "new-admin" ? "bg-success" : "bg-warning"
        }`}
        aria-current="page"
        to="/admin/newAdmin"
      >
        <span className="px-3">
          <i className="far fa-plus-square"></i>
        </span>
        Make Admin
      </Link>
      <Link
        className={`nav-link text-light border-bottom ${
          active === "manage-package" ? "bg-success" : "bg-warning"
        }`}
        aria-current="page"
        to="/admin/managePackage"
      >
        <span className="px-3">
          <i className="fas fa-th"></i>
        </span>
        Manage Packages / Services
      </Link>
      <Link
        className={`nav-link text-light border-bottom ${
          active === "admin-list" ? "bg-success" : "bg-warning"
        }`}
        aria-current="page"
        to="/admin/adminList"
      >
        <span className="px-3">
          <i className="fas fa-th"></i>
        </span>
        Admin List
      </Link>
    </nav>
  );

  return (
    <div className="">
      <nav className="navbar navbar-dark bg-info border-bottom">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand " href="/">
            MA Computer
          </a>
        </div>
      </nav>
      {navType === "admin" ? AdminNav : UserNav}
    </div>
  );
};

export default DashboardSideNav;
