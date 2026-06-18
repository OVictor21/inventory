import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { login as loginAPI } from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Call the API login service
      const response = await loginAPI({
        email: email, // or username, depending on your API
        password: password,
      });

      // Store token based on remember me preference
      const storage = rememberMe ? localStorage : sessionStorage;
      if (response.token || response.access) {
        storage.setItem("token", response.token || response.access);
        if (response.refresh) {
          storage.setItem("refreshToken", response.refresh);
        }
      }

      // Store user data in AuthContext
      login(response.token || response.access, response.user || response);

      // Redirect to dashboard
      navigate("/Dashboard");
    } catch (err) {
      setError(
        err?.message || 
        err?.detail || 
        err?.error || 
        "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="bg-white min-vh-100 d-flex align-items-center justify-content-center mt-3 mt-md-0">
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          {/* Logo + Text */}
          <div className="position-absolute top-0 start-0 p-3 d-flex align-items-center">
            <img
              src="./logo.png"
              alt="Logo"
              className="me-1 logo"
            />
            <h1 className="fw-bold">Bestworth</h1>
          </div>

          <div className="p-4 shadow rounded bg-white">
            <h3 className="fw-bold mb-4">Sign In</h3>

            <Button variant="outline-primary" className="w-100 mb-3 d-flex align-items-center justify-content-center">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                width="20"
                height="20"
                className="me-2"
              />
              Sign in with Google
            </Button>

            <div className="d-flex align-items-center my-3">
              <div className="flex-grow-1 border-top"></div>
              <span className="mx-2 text-muted">Or</span>
              <div className="flex-grow-1 border-top"></div>
            </div>

            {error && (
              <Alert variant="danger" className="mb-3">
                {error}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <InputGroup.Text></InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control 
                    type="password" 
                    placeholder="Input password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <InputGroup.Text></InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Check 
                  type="checkbox" 
                  label="Remember me ?" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <a href="/Reset1" className="text-decoration-none">
                  Forget Password
                </a>
              </div>

              <Button 
                variant="primary" 
                type="submit" 
                className="w-100"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </Form>

            <p className="mt-3 text-center text-muted">
              Do not have account?{" "}
              <a href="/Signup" className="text-decoration-none">
                Sign Up
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
