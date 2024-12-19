import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidenav = () => {
  return (
    <div className="d-flex">
      {/* Sidebar with Logo */}
      <div className="bg-dark text-white d-flex flex-column align-items-center p-3 vh-100" style={{ width: '200px' }}>
        <a href="/" className="d-block mb-4">
          <img
            src="./logo.png" // Replace with your actual logo URL
            alt="Logo"
            className="img-fluid"
          />
        </a>
      </div>

      {/* Main Content Area with Sign-Up Form */}
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4">
        <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <h3 className="text-center mb-4">Sign Up</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" required />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-auto text-center py-3 w-100 bg-light position-absolute bottom-0">
          <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Sidenav;
