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


const AddProduct = () => {
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
            className="main-content"
              style={{
               marginLeft: "250px", 
              paddingTop: "100px",  
              backgroundColor: "#F7F7F7",
              padding: "1rem",
              width: "100%",
           }}
          >     
          <div className="mb-4">
        <h4 className="fw-bold">Product</h4>
       <span className="medium ">
                 <Link to="/dashboard" className="medium das">Dashboard</Link>
                 <span className="mx-1"><i className="fa-solid fa-chevron-right"></i></span>
                 <Link to="/profile" className="medium fw-bold das1">Product</Link>
                 <span className="mx-1"><i className="fa-solid fa-chevron-right"></i></span>
                 <Link to="/profile" className="medium fw-bold das1">Add Product</Link>
                 </span>
      </div>

      <Row>
        {/* Left Form Section */}
        <Col md={8}>
          <Card className="shadow-sm rounded-4">
            <Card.Body>
              <h5 className="fw-bold">Product Information</h5>
              <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam aenean in velit mattis.
              </p>

              <Form>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Label>SKU</Form.Label>
                    <Form.Control type="text" placeholder="Input SKU" />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Input product name" />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Label>Size</Form.Label>
                    <Form.Control type="text" placeholder="Input size" />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Color</Form.Label>
                    <Form.Control type="text" placeholder="Input color" />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Label>Product Category</Form.Label>
                    <Form.Select>
                      <option>Select product category</option>
                      <option>Category 1</option>
                      <option>Category 2</option>
                    </Form.Select>
                  </Col>
                  <Col md={6}>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Input price" />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" placeholder="Input stock" />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Status Product</Form.Label>
                    <Form.Select>
                      <option>Select status product</option>
                      <option>Available</option>
                      <option>Out of Stock</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Image Upload Section */}
        <Col md={4}>
          <Card className="shadow-sm rounded-4">
            <Card.Body>
              <h5 className="fw-bold">Image Product</h5>
              <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                Note: Format photos SVG, PNG, or JPG (Max size 4MB)
              </p>

              <Row className="mb-3">
                {[1, 2, 3, 4].map((photo) => (
                  <Col md={6} key={photo} className="mb-2">
                    <div
                      className="border rounded-3 p-3 text-center"
                      style={{ cursor: "pointer", backgroundColor: "#f8f9fa" }}
                    >
                      <i className="fas fa-image fa-2x mb-2 text-secondary"></i>
                      <div className="text-muted">Photo {photo}</div>
                    </div>
                  </Col>
                ))}
              </Row>

              <Button variant="primary" className="w-100 rounded-pill mt-3">
                Save Product
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
        </div>
        </div>
    
  
  );
};

export default AddProduct;
