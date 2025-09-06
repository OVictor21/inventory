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



const AccountSettings = () => {
  return (
      <div >
        <Navbar2/>
        <Sidebar />
        

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
                      src=""
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
        </div>
      </div>
   
  );
};

export default AccountSettings;
