import Navbar from "../components/navbar";

import React from 'react'

const Addproduct = () => {
  return (
    <div>
        <Navbar/>
    
    <div className="d-flex">

      {/* Main Content Area with Sign-Up Form */}
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4">
        <div className="card shadow p-3" style={{ maxWidth: '500px', width: '100%' }}>
          <h3 className="text-center mb-4 signuptext">Sign Up</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Product Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
               Item Amount
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Model Number
              </label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
               Price
              </label>
              <input type="password" className="form-control" id="password" required />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Edit
              </button>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>

            <div className="text-center mt-3 ">
    <p>Already have an account?{' '}<a href="/login" className="text-decoration-none">Sign In</a></p>
  </div>

          </form>
        </div>

        {/* Footer */}
        <footer className="mt-auto text-center py-3 w-100 position-absolute footers text-white ">
          <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
         
        </footer>
      </div>
    </div>
    </div>
  )
}

export default Addproduct;