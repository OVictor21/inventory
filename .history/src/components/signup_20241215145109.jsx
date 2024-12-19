import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  return (
    <div className="d-flex">
      {/* Sidebar with Logo */}
      <div className="side text-white d-flex flex-column align-items-center p-3 vh-100" style={{ width: '200px' }}>
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
        <div className="card shadow p-3" style={{ maxWidth: '500px', width: '100%', maxHeight: }}>
          <h3 className="text-center mb-4 signuptext">Sign Up</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                First Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Last Name
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
        <footer className="mt-auto text-center py-3 w-100 position-absolute footers text-white ">
          <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
         
        </footer>
      </div>
    </div>
  );
};

export default Signup;
