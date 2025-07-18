import React, { useState } from "react";
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



const Security = () => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [newPassword, setNewPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 

  // Validation checks
  const isLengthValid = newPassword.length >= 8;
  const hasUpperAndLower = /(?=.*[a-z])(?=.*[A-Z])/.test(newPassword);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
  const doPasswordsMatch = newPassword === confirmPassword && confirmPassword.length > 0;

  // Check if all validations pass
  const isFormValid = isLengthValid && hasUpperAndLower && hasSpecialChar && doPasswordsMatch;


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
           <Link to="/Accountsettings" className="btn acc">Account</Link>
          <Link to="/Security" className="btn sec active">Security</Link>
          </div>

          <Card className="mt-5 shadow-sm rounded-4">
            <Card.Body>
              <h5 className="fw-bold mb-4">Password</h5>
              <Row className="gy-3">
                <Col md={4}>
                  <Form.Label>Old Password</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type={showOld ? "text" : "password"}
                      className="rounded-pill"
                      placeholder="Enter old password"
                    />
                    <i
                      className={`fa ${showOld ? "fa-eye-slash" : "fa-eye"} position-absolute`}
                      style={{
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "#6c757d",
                      }}
                      onClick={() => setShowOld(!showOld)}
                    ></i>
                  </div>
                </Col>
                <Col md={4}>
                  <Form.Label>New Password</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type={showNew ? "text" : "password"}
                      className="rounded-pill"
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <i
                      className={`fa ${showNew ? "fa-eye-slash" : "fa-eye"} position-absolute`}
                      style={{
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "#6c757d",
                      }}
                      onClick={() => setShowNew(!showNew)}
                    ></i>
                  </div>
                </Col>
                <Col md={4}>
                  <Form.Label>Confirm Password</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type={showConfirm ? "text" : "password"}
                      className="rounded-pill"
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <i
                      className={`fa ${showConfirm ? "fa-eye-slash" : "fa-eye"} position-absolute`}
                      style={{
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "#6c757d",
                      }}
                      onClick={() => setShowConfirm(!showConfirm)}
                    ></i>
                  </div>
                </Col>
              </Row>

              {/* Validation Rules */}
              <div className="mt-3">
                <p className={isLengthValid ? "text-success" : "text-danger"}>
                  <i className={`fa-solid ${isLengthValid ? "fa-check-circle" : "fa-circle"}`}></i>{" "}
                  Minimum 8 characters.
                </p>
                <p className={hasUpperAndLower ? "text-success" : "text-danger"}>
                  <i className={`fa-solid ${hasUpperAndLower ? "fa-check-circle" : "fa-circle"}`}></i>{" "}
                  Use uppercase & lowercase letters.
                </p>
                <p className={hasSpecialChar ? "text-success" : "text-danger"}>
                  <i className={`fa-solid ${hasSpecialChar ? "fa-check-circle" : "fa-circle"}`}></i>{" "}
                  Include a special character (e.g., !, @, #, $, %)
                </p>
                <p className={doPasswordsMatch ? "text-success" : "text-danger"}>
                  <i className={`fa-solid ${doPasswordsMatch ? "fa-check-circle" : "fa-circle"}`}></i>{" "}
                  Passwords match.
                </p>
              </div>

              {/* Update Button */}
              <div className="mt-4">
                <Button
                  variant="primary"
                  disabled={!isFormValid}
                >
                  Update Password
                </Button>
                <Button variant="outline-secondary" className="ms-2">
                  Cancel
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Security;
