import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Form,
  Accordion,
} from "react-bootstrap";





const Dashboard = () => {
   const [dashboardData] = useState({
    notifications: [
      { id: 1, name: "Napoleon Mark", product: "sink", price: 3000 },
      { id: 2, name: "Napoleon Mark", product: "sink", price: 3000 },
    ],
    stats: {
      totalRevenue: 91000,
      totalCustomer: 5000,
      totalExpenditure: 12000,
      totalProductSold: 50,
    },
    salesThisMonth: {
      avgItemValue: 211411,
      avgMonthValue: 339091,
    },
    loginRecords: [
      { id: 1, name: "Napoleon Mark", timeIn: "1:00AM", timeOut: "3:00AM" },
      { id: 2, name: "Napoleon Mark", timeIn: "1:00AM", timeOut: "3:00AM" },
    ],
    popularProducts: [
      { id: 1, name: "Pipes", code: "021231", price: 20000, sales: 3000, status: "Success" },
      { id: 2, name: "Screws", code: "021231", price: 20000, sales: 2311, status: "Success" },
      { id: 3, name: "Nuts", code: "021231", price: 20000, sales: 2111, status: "Success" },
      { id: 4, name: "Bolts", code: "021231", price: 20000, sales: 1661, status: "Success" },
    ],
  });

  // Simulate data fetch
  useEffect(() => {
    console.log("Data loaded:", dashboardData);
  }, []); 



  return (
    <div>
      {/* Top Navbar */}
      <Navbar
        expand="lg"
        className="top-navbar d-flex justify-content-between align-items-center px-4 py-2"
        style={{
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1030,
          backgroundColor: "#fff",
        }}
      >
        <Form className="d-flex w-25 bar">
          <Form.Control
            type="search"
            placeholder="Search product"
            className="search-input"
          />
        </Form>
        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link>
            <i className="bi bi-bell-fill fs-5"></i>
          </Nav.Link>
          <Nav.Link>
            <i className="bi bi-envelope-fill fs-5"></i>
          </Nav.Link>
          <Nav.Link className="fw-bold">
            Napoleon Mark <span className="text-muted">Admin</span>
          </Nav.Link>
        </Nav>
      </Navbar>

      <div
        style={{
          display: "flex",
          height: "auto",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: "250px",
            backgroundColor: "#f8f9fa",
            borderRight: "1px solid #dee2e6",
            padding: "1rem",
            paddingTop: "70px",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1020,
          }}
        >

          <div className="logo mb-4">
                      <img src="./logo.png" alt="Logo" className="logo-img" />
                      <span className="logo-text fw-bold ms-2">Bestworth</span>
                    </div>
          
                    <Nav className="flex-column side">
                      <div className="sidebar-header">GENERAL</div>
                      <Nav.Link className="sidebar-link">
                        <span className="icon">
                          <i className="fa-solid fa-house"></i>
                        </span>
                        Dashboard
                      </Nav.Link>
          
                      {/* Product Dropdown */}
                      <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header className="side">
                            <span className="icon">
                              <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                            Product
                          </Accordion.Header>
                          <Accordion.Body className="ps-4 side">
                            <Nav.Link className="sidebar-link">Pasin and Pedestal</Nav.Link>
                            <Nav.Link className="sidebar-link">WC</Nav.Link>
                            <Nav.Link className="sidebar-link">Categories</Nav.Link>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
          
                      <Nav.Link className="sidebar-link">
                        <span className="icon"><i className="fa-solid fa-receipt"></i></span> Order
                      </Nav.Link>
                      <Nav.Link className="sidebar-link">
                        <span className="icon"><i className="fa-solid fa-users"></i></span> Users
                      </Nav.Link>
                      <Nav.Link className="sidebar-link">
                        <span className="icon"><i className="fa-solid fa-chart-line"></i></span> Sales Report
                      </Nav.Link>
          
                      <div className="mt-4">
                        <div className="sidebar-header">TOOLS</div>
                        <Nav.Link className="sidebar-link active">
                          <span className="icon"><i className="fa-solid fa-gear"></i></span> Account & Settings
                        </Nav.Link>
                        <Nav.Link className="sidebar-link">
                          <span className="icon"><i className="fa-solid fa-circle-question"></i></span> Help
                        </Nav.Link>
                        <div className="dark-mode-switch mt-3">
                          <Form.Check type="switch" label="Dark Mode" />
                        </div>
                      </div>
                    </Nav>
                  </div>
                   </div>
              
            <div
          style={{
            flex: 1,
            padding: "2rem",
            backgroundColor: "#F7F7F7",
            marginLeft: "250px",
            paddingTop: "70px",
            minHeight: "100vh",
          }}
        >
        
        <div className="container-fluid py-3">
      <h4 className="fw-bold">Dashboard</h4>
      <p className="text-muted">Dashboard</p>

      {/* Notification Center Sales */}
      <div className="row">
        <div className="col-lg-4 mb-3">
          <div className="card p-3">
            <div className="d-flex justify-content-between">
              <h6 className="fw-bold">Notification Center Sales</h6>
              <a href="/" className="text-decoration-none">Show All</a>
            </div>
            {dashboardData.notifications.map((n) => (
              <div key={n.id} className="d-flex align-items-center border p-2 rounded my-2">
                <img
                  src="/user.png"
                  alt="user"
                  width="40"
                  height="40"
                  className="rounded-circle me-2"
                />
                <span>
                  <strong>{n.name}</strong> just sold a {n.product} for ₦{n.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="col-lg-2 mb-3">
          <div className="card p-3 text-white bg-primary">
            <h6>Total Revenue</h6>
            <h4>₦{dashboardData.stats.totalRevenue.toLocaleString()}</h4>
            <small className="text-white">↑ 10.4% From last week</small>
          </div>
        </div>

        <div className="col-lg-2 mb-3">
          <div className="card p-3">
            <h6>Total Customer</h6>
            <h4>{dashboardData.stats.totalCustomer.toLocaleString()}</h4>
            <small className="text-success">↑ 1.5% From last week</small>
          </div>
        </div>

        <div className="col-lg-2 mb-3">
          <div className="card p-3">
            <h6>Total Expenditure</h6>
            <h4>₦{dashboardData.stats.totalExpenditure.toLocaleString()}</h4>
            <small className="text-success">↑ 3.6% From last week</small>
          </div>
        </div>

        <div className="col-lg-2 mb-3">
          <div className="card p-3">
            <h6>Total Product Sold</h6>
            <h4>{dashboardData.stats.totalProductSold}</h4>
            <small className="text-danger">↓ 1.5% From last week</small>
          </div>
        </div>
      </div>

      {/* Graph Placeholder + Login Notification */}
      <div className="row">
        <div className="col-lg-8 mb-3">
          <div className="card p-3">
            <div className="d-flex justify-content-between">
              <h6 className="fw-bold">Your Sales this month</h6>
              <a href="/">Show All</a>
            </div>
            <div style={{ height: "200px" }} className="bg-light d-flex justify-content-center align-items-center">
              <span className="text-muted">
                Avg Item: ₦{dashboardData.salesThisMonth.avgItemValue.toLocaleString()} |
                Avg Month: ₦{dashboardData.salesThisMonth.avgMonthValue.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-3">
          <div className="card p-3">
            <div className="d-flex justify-content-between">
              <h6 className="fw-bold">Login Notification Center</h6>
              <a href="/">Show All</a>
            </div>
            <table className="table table-borderless mt-2">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Time In</th>
                  <th>Time Out</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.loginRecords.map((login) => (
                  <tr key={login.id}>
                    <td>{login.name}</td>
                    <td>{login.timeIn}</td>
                    <td>{login.timeOut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Product Popular */}
      <div className="card p-3">
        <div className="d-flex justify-content-between">
          <h6 className="fw-bold">Product Popular</h6>
          <a href="/">Show All</a>
        </div>
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.popularProducts.map((p) => (
              <tr key={p.id}>
                <td>{p.code} {p.name}</td>
                <td>₦{p.price.toLocaleString()}</td>
                <td>{p.sales.toLocaleString()}</td>
                <td>
                  <span className={`badge bg-${p.status === "Success" ? "success" : "secondary"}`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </div>
      </div>
   
  );
};

export default Dashboard;
