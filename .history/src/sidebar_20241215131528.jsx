import React from 'react';
import { Link } from 'react-router-dom'; // Optional if using React Router

const SideNav = () => {
  return (
    <div className="d-flex">
      <div
        className="bg-dark text-white p-3 vh-100"
        style={{ width: '250px' }}
      >
        <h4 className="mb-4">Dashboard</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link text-white">
              <i className="bi bi-house-door me-2"></i>Home
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/profile" className="nav-link text-white">
              <i className="bi bi-person me-2"></i>Profile
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/settings" className="nav-link text-white">
              <i className="bi bi-gear me-2"></i>Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-link text-white">
              <i className="bi bi-box-arrow-right me-2"></i>Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-grow-1 p-4">
        <h2>Main Content Area</h2>
        <p>This is where your main content will appear.</p>
      </div>
    </div>
  );
};

export default SideNav;
