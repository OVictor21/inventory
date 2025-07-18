import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Card,
  Table,
  ListGroup,
  Dropdown
} from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container fluid className="p-0">
      {/* Sidebar */}
      <Row className="g-0">
        <Col md={2} className="bg-light vh-100 p-3">
          <div className="mb-4">
            <img src="./logo.png" alt="Logo" width="50" className="me-2" />
            <span className="fw-bold fs-5">richbon HO</span>
          </div>

          <Nav className="flex-column">
            <Nav.Link active>Dashboard</Nav.Link>
            <Nav.Link>Product</Nav.Link>
            <Nav.Link>Order</Nav.Link>
            <Nav.Link>Users</Nav.Link>
            <Nav.Link>Sales Report</Nav.Link>
            <hr />
            <Nav.Link>Account & Settings</Nav.Link>
            <Nav.Link>Help</Nav.Link>
            <Form.Check 
              type="switch"
              id="dark-mode-switch"
              label="Dark Mode"
              className="mt-3"
            />
          </Nav>

          <div className="mt-auto">
            <Dropdown>
              <Dropdown.Toggle variant="light" className="w-100">
                Napoleon <small className="text-muted">Admin</small>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>

        {/* Main content */}
        <Col md={10} className="p-3">
          {/* Top Navbar */}
          <Navbar expand="lg" className="mb-4">
            <Container fluid>
              <Form className="d-flex w-50">
                <FormControl
                  type="search"
                  placeholder="Search product"
                  className="me-2"
                />
                <Button variant="outline-secondary">Search</Button>
              </Form>
              <Nav>
                <Nav.Link><i className="bi bi-bell"></i></Nav.Link>
                <Nav.Link><i className="bi bi-gear"></i></Nav.Link>
                <Nav.Link className="fw-bold">NAPOLEON</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          {/* Dashboard Heading */}
          <h2 className="fw-bold mb-3">Dashboard</h2>

          {/* Row: Notification Center + Revenue/Stats */}
          <Row className="mb-4">
            <Col md={8}>
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  Notification Center Sales <Button variant="link">Show All</Button>
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Napoleon Mark just sold a sink for ₦3000
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Napoleon Mark just sold a sink for ₦3000
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col md={4}>
              <Row>
                <Col md={12} className="mb-3">
                  <Card bg="primary" text="white">
                    <Card.Body>
                      <Card.Title>Total Revenue</Card.Title>
                      <Card.Text>₦91,000</Card.Text>
                      <small>+5.8% From last week</small>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={12}>
                  <Card bg="light">
                    <Card.Body>
                      <Card.Title>Total Customers</Card.Title>
                      <Card.Text>5,000</Card.Text>
                      <small>+1.5% From last week</small>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Row: Chart + Expenditure/Product Sold */}
          <Row className="mb-4">
            <Col md={8}>
              <Card>
                <Card.Header>Your Sales This Month</Card.Header>
                <Card.Body>
                  {/* Placeholder for Chart */}
                  <div className="p-5 text-center text-muted">[Chart here]</div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Row>
                <Col md={12} className="mb-3">
                  <Card>
                    <Card.Body>
                      <Card.Title>Total Expenditure</Card.Title>
                      <Card.Text>₦12,000</Card.Text>
                      <small>+3.6% From last week</small>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={12}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Total Product Sold</Card.Title>
                      <Card.Text>50</Card.Text>
                      <small>-1.5% From last week</small>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Row: Login Notification Center + Popular Products */}
          <Row>
            <Col md={6}>
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  Login Notification Center <Button variant="link">Show All</Button>
                </Card.Header>
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Time In</th>
                      <th>Time Out</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Napoleon Mark</td>
                      <td>1:00 AM</td>
                      <td>3:00 AM</td>
                    </tr>
                    <tr>
                      <td>Napoleon Mark</td>
                      <td>1:00 AM</td>
                      <td>3:00 AM</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  Product Popular <Button variant="link">Show All</Button>
                </Card.Header>
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Sales</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pipes</td>
                      <td>₦20,000</td>
                      <td>3,000</td>
                      <td><span className="text-success">Success</span></td>
                    </tr>
                    <tr>
                      <td>Screws</td>
                      <td>₦20,000</td>
                      <td>2,311</td>
                      <td><span className="text-success">Success</span></td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
