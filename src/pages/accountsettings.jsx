import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  Button,
  Card,
  Accordion,
} from "react-bootstrap";
import { Link } from "react-router-dom";



const AccountSettings = () => {
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

            <Nav.Link className="sidebar-link"><span className="icon"><i className="fa-solid fa-receipt"></i> </span>Order</Nav.Link>
            <Nav.Link className="sidebar-link"> <span className="icon"><i className="fa-solid fa-users"></i></span>Users</Nav.Link>
            <Nav.Link className="sidebar-link"> <span className="icon"><i className="fa-solid fa-chart-line"></i></span>Sales Report</Nav.Link>
            
            <div className="mt-4">
              <div className="sidebar-header">TOOLS</div>
              <Nav.Link className="sidebar-link active"><span className="icon"><i className="fa-solid fa-gear"></i></span>Account & Settings</Nav.Link>
              <Nav.Link className="sidebar-link"> <span className="icon"><i className="fa-solid fa-circle-question"></i></span>Help</Nav.Link>
              <div className="dark-mode-switch mt-3">
                <Form.Check type="switch" label="Dark Mode" />
              </div>
            </div>
          </Nav>
        </div>

        {/* Main Content */}
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
          <h4 className="fw-bold">Account & Settings</h4>

          <span className="medium ">
          <Link to="/dashboard" className="medium das">Dashboard</Link>
          <span className="mx-1"><i className="fa-solid fa-chevron-right"></i></span>
          <Link to="/profile" className="medium fw-bold das1">Profile</Link>
          </span>
          
              <div className="account rounded mt-4 fw-medium d-flex justify-content-between align-items-center">
              <Button to="/Account" className="acc active">Account</Button>
              <Button to="/Security" className="sec">Security</Button>
</div>

              <Card className="rounded-4 shadow-sm mt-5">
                <Card.Body>
                  <h5 className="fw-bold mb-4">Profile Information</h5>
                  <div className="profile-picture mb-3">
                    <img
                      src="https://via.placeholder.com/60"
                      alt="Profile"
                      className="rounded-circle me-3"
                    />
                    <Button
                      variant="outline-secondary"
                      className="change-picture-btn"
                    >
                      Change Picture
                    </Button>
                  </div>
                  <Row className="gy-3">
                    <Col md={6}>
                      <Form.Label className="fw-semibold">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue="Ugberease"
                        className="rounded-pill"
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Label className="fw-semibold">Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue="Napoleon"
                        className="rounded-pill"
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Label className="fw-semibold">Email</Form.Label>
                      <Form.Control
                        type="email"
                        defaultValue="napoleonmark04@gmail.com"
                        className="rounded-pill"
                      />
                    </Col>
                    <Col md={3}>
                      <Form.Label className="fw-semibold">Gender</Form.Label>
                      <Form.Select className="rounded-pill">
                        <option>Male</option>
                        <option>Female</option>
                      </Form.Select>
                    </Col>
                    <Col md={3}>
                      <Form.Label className="fw-semibold">
                        Date Birthday
                      </Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue="23 April 2000"
                        className="rounded-pill"
                      />
                    </Col>
                  </Row>

                  <div className="mt-4">
                    <Button variant="primary" className="rounded-pill me-2">
                      Update
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="rounded-pill"
                    >
                      Cancel
                    </Button>
                  </div>
                </Card.Body>
              </Card>

              {/* Contact Detail */}
              <Card className="mt-5">
                <Card.Body>
                  <Card.Title>Contact Detail</Card.Title>
                  <Row>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" defaultValue="08126241380" />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" defaultValue="Nigeria" />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" defaultValue="Lagos State" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="text-end">
                    <Button variant="outline-secondary" size="sm">
                      Edit
                    </Button>
                  </div>
                </Card.Body>
              </Card>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
