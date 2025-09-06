import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

const Reset2 = () => {
  useEffect(() => {
    const raw = JSON.stringify({
      username: "admin",
      password: "admin",
    });

    const requestOptions = {
      method: "POST",
      body: raw,
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };

    fetch("https://sims-mup1.onrender.com/auth/login/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

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
            <h3 className="fw-bold mb-4">Reset Password</h3>


            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>New Password</Form.Label>
                <InputGroup>
                  <Form.Control type="Password" placeholder="Input Password" />
                  <InputGroup.Text></InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                  <Form.Control type="password" placeholder="Confirm password" />
                  <InputGroup.Text></InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Check type="checkbox" label="Remember me ?" />
                <a href="#" className="text-decoration-none">
                  Forget Password
                </a>
              </div>

              <Button variant="primary" type="submit" className="w-100">
                Sign In
              </Button>
            </Form>

            <p className="mt-3 text-center text-muted">
              Do not have account?{" "}
              <a href="#" className="text-decoration-none">
                Sign Up
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Reset2;
