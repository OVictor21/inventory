import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`side text-white p-3 vh-100 ${isOpen ? 'd-block' : 'd-none'}`}
        style={{ width: '350px' }}
      >
      </div>


   

        {/* <div className="container">
          <div className="card shadow p-4 mx-auto" style={{ maxWidth: '400px' }}>
            <h3 className="text-center mb-4">Login</h3>
            <form>
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
                  Sign In
                </button>
              </div>
            </form>
            <p className="text-center mt-3">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div> */}

        {/* Footer */}
        <footer className="mt-auto text-center py-3 bg-light">
          <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    
  );
};

export default SideNav;
