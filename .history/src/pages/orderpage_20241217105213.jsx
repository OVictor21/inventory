import React from 'react'

const Orderpage = () => {
  return (
    import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">OrderNow</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Orders</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container flex-grow-1 py-5">
        <h2 className="mb-4 text-center">Place Your Order</h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="card p-4 shadow">
              <div className="mb-3">
                <label htmlFor="customerName" className="form-label">Customer Name</label>
                <input type="text" className="form-control" id="customerName" placeholder="Enter your name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">Shipping Address</label>
                <textarea className="form-control" id="address" rows="3" placeholder="Enter your shipping address" required></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="product" className="form-label">Product</label>
                <select className="form-select" id="product" required>
                  <option value="">Select a product</option>
                  <option value="Product 1">Product 1</option>
                  <option value="Product 2">Product 2</option>
                  <option value="Product 3">Product 3</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input type="number" className="form-control" id="quantity" min="1" required />
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Place Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; 2024 OrderNow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default OrderPage;

  )
}

export default Orderpage;