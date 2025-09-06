import React, { useState, useEffect } from "react";
import { Badge, Table, Card } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/navbar2";

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
      { id: "021231", name: "Pipes", price: 20000, sales: 3000, status: "Success", image: "/item.jpg" },
      { id: "021232", name: "Screws", price: 20000, sales: 2311, status: "Success", image: "/item.jpg" },
      { id: "021233", name: "Nuts", price: 20000, sales: 2111, status: "Success", image: "/item.jpg" },
      { id: "021234", name: "Bolts", price: 20000, sales: 1661, status: "Success", image: "/item.jpg" },
    ],
  });

  // Simulate data fetch
  useEffect(() => {
    console.log("Data loaded:", dashboardData);
  }, [dashboardData]); // ✅ added dependency to fix ESLint warning

  return (
    <div>
      <Navbar2 />
      <Sidebar />

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
            <div className="col-lg-8 mb-3">
              <div className="card p-3">
                <div className="d-flex justify-content-between">
                  <h6 className="fw-bold">Notification Center Sales</h6>
                  <a href="/" className="text-decoration-none text-black">
                    Show All <span style={{ fontSize: "20px" }}>&#8599;</span>
                  </a>
                </div>
                {dashboardData.notifications.map((n) => (
                  <div
                    key={n.id}
                    className="d-flex align-items-center border p-2 rounded my-2 not"
                  >
                    <img
                      src="/item.jpg"
                      alt="user"
                      width="40"
                      height="30"
                      className="rounded-circle me-2"
                    />
                    <span>
                      {n.name} just sold a {n.product} for ₦{n.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
          <div className="col-lg-2 mb-3">
  <div
    className="card not-card text-white bg-primary p-4 d-flex flex-column justify-content-between shadow"
    style={{ minHeight: "180px", borderRadius: "15px" }}
  >
    <p className="d-flex justify-content-between align-items-center fs-6">
      Total Revenue
      <span style={{ fontSize: "22px" }}>&#8599;</span>
    </p>
    <div className="d-flex justify-content-between align-items-center mt-auto">
      <h3 className="mb-0 fw-bold">₦{dashboardData.stats.totalRevenue.toLocaleString()}</h3>
      <span className="text-white ms-2 small">From last week</span>
    </div>
  </div>
</div>

<div className="col-lg-2 mb-3">
  <div
    className="card not-card p-4 d-flex flex-column justify-content-between shadow"
    style={{ minHeight: "180px", borderRadius: "15px" }}
  >
    <p className="d-flex justify-content-between align-items-center fs-6 text-dark">
      Total Customer
      <span style={{ fontSize: "22px" }}>&#8599;</span>
    </p>
    <div className="d-flex justify-content-between align-items-center mt-auto">
      <h3 className="mb-0 text-primary fw-bold">{dashboardData.stats.totalCustomer.toLocaleString()}</h3>
      <span className="text-dark ms-2 small">From last week</span>
    </div>
  </div>
</div>
          </div>

          {/* Sales This Month + Login Notification */}
          <div className="row">
            {/* Sales This Month */}
            <div className="col-lg-8 mb-3">
              <div className="card p-3">
                <div className="d-flex justify-content-between">
                  <h6 className="fw-bold">Your Sales this month</h6>
                  <a href="/" className="text-decoration-none text-black">
                    Show All <span style={{ fontSize: "20px" }}>&#8599;</span>
                  </a>
                </div>
                <div
                  style={{ height: "400px" }}
                  className="bg-light d-flex justify-content-center align-items-center"
                >
                  <span className="text-muted">
                    Avg Item: ₦{dashboardData.salesThisMonth.avgItemValue.toLocaleString()} |
                    Avg Month: ₦{dashboardData.salesThisMonth.avgMonthValue.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="col-lg-4">
              <div className="row">
                {/* Total Expenditure */}
                <div className="col-6 mb-3">
  <div
    className="card not-card p-4 d-flex flex-column justify-content-between shadow"
    style={{ minHeight: "180px", borderRadius: "15px" }}
  >
    <p className="d-flex justify-content-between align-items-center fs-6 text-dark">
      Total Expenditure
      <span style={{ fontSize: "22px" }}>&#8599;</span>
    </p>
    <div className="d-flex justify-content-between align-items-center mt-auto">
      <h3 className="mb-0 text-primary fw-bold">₦{dashboardData.stats.totalExpenditure.toLocaleString()}</h3>
      <span className="text-dark ms-2 small">From last week</span>
    </div>
  </div>
</div>

                {/* Total Product Sold */}
           <div className="col-lg-3 mb-3">
  <div
    className="card not-card p-4 d-flex flex-column justify-content-between shadow"
    style={{ minHeight: "180px", borderRadius: "15px" }}
  >
    <p className="d-flex justify-content-between align-items-center fs-6 text-dark">
      Total Product Sold
      <span style={{ fontSize: "22px" }}>&#8599;</span>
    </p>
    <div className="d-flex justify-content-between align-items-center mt-auto">
      <h3 className="mb-0 text-primary fw-bold">{dashboardData.stats.totalProductSold.toLocaleString()}</h3>
      <span className="text-dark ms-2 small">From last week</span>
    </div>
  </div>
</div>

                {/* Login Notification Center */}
                <div className="col-12">
                  <div className="card p-3 shadow-sm border-0 rounded-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="fw-bold">Login Notification Center</h6>
                      <a href="/" className="text-decoration-none text-black">
                        Show All <span style={{ fontSize: "20px" }}>&#8599;</span>
                      </a>
                    </div>
                    <table className="table table-borderless mt-2 border rounded">
                      <thead className="table-light text-muted"> 
                        <tr className="not">
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
            </div>
          </div>

          {/* Product Popular */}
          <Card className="shadow-sm rounded-4">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold">Product Popular</h6>
                <a href="/" className="text-decoration-none text-primary">Show All →</a>
              </div>

              <Table hover responsive borderless>
                 <thead className="table-light text-muted">
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Sales</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.popularProducts.map((p, index) => (
                    <tr key={index}>
                      <td className="d-flex align-items-center">
                        <img
                          src={p.image}
                          alt={p.name}
                          width="40"
                          height="40"
                          className="me-2 rounded"
                        />
                        <div>
                          <span className="fw-bold d-block">{p.id}</span>
                          <small className="text-muted">{p.name}</small>
                        </div>
                      </td>
                      <td>₦{p.price.toLocaleString()}</td>
                      <td>{p.sales}</td>
                      <td>
                        <Badge
                          bg="success"
                           style={{
                          fontSize: "14px",
                          height: "40px",
                          width: "120px",
                          padding: "10px 22px",
                        }}
                        >
                          {p.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
