import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/navbar2";


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
      <Navbar2/>
      <Sidebar />

    <div>
        {/* Sidebar */}
        
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
