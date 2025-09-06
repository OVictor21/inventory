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

const Adduser = () => {
  return (
    <div>
      <div>
        <Navbar2 />
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
          <div className="mb-4">
            <h4 className="fw-bold">Add User</h4>
            <span className="medium ">
              <Link to="/dashboard" className="medium das">
                Dashboard
              </Link>
              <span className="mx-1">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              <Link to="/profile" className="medium fw-bold das1">
                User
              </Link>
              <span className="mx-1">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              <Link to="/profile" className="medium fw-bold das1">
                Add User
              </Link>
            </span>
          </div>

          {/* Left aligned narrower form */}
          <Row>
            <Col md={6} lg={5}>
              <Card className="shadow-sm rounded-4">
                <Card.Body>
                  <h5 className="fw-bold">User</h5>

                  <Form>
                    <Row className="mb-3">
                      <Col md={12}>
                        <Form.Label>Name of user</Form.Label>
                        <Form.Control type="text" placeholder="Input name" />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Input Email" />
                      </Col>
                      <Col md={6}>
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Input Phone number"
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Label>Gender</Form.Label>
                        <Form.Select>
                          <option>Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </Form.Select>
                      </Col>
                      <Col md={6}>
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Input Date of birth"
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col md={12}>
                        <Form.Label>Address</Form.Label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Input Address"
                        ></textarea>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col md={12}>
                        <Button
                          variant="primary"
                          type="submit"
                          className="rounded-4 px-4 w-100"
                        >
                          Add User
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Adduser;
