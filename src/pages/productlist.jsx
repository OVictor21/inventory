import {
  Tabs,
  Navbar,
  Nav,
  Form,
  Button,
  Card,
  Accordion,
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";


const Productlist = () => {
   
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
                color:"Black",
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
                <div className="sidebar-header text-muted">GENERAL</div>
                <Nav.Link className="sidebar-link text-muted">
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
              <h4 className="fw-bold">Product</h4>
    
              <span className="medium ">
              <Link to="/dashboard" className="medium das">Dashboard</Link>
              <span className="mx-1"><i className="fa-solid fa-chevron-right"></i></span>
              <Link to="/profile" className="medium fw-bold das1">Product</Link>
              </span>

         

          <Card className="shadow-sm">
            <Card.Body>
               <div className="d-flex justify-content-between align-items-center mb-3">
            <Form.Control
              type="search"
              placeholder="Search for id, name product"
              className="w-50 rounded-pill"
            />
          <div className="d-flex gap-2">
              <Button variant="outline-secondary">
              <i className="fas fa-filter"></i> Filter
              </Button>
              <Button variant="outline-secondary">
              <i className="fas fa-file-export"></i> Export
              </Button>
              <Button variant="primary" className="rounded-pill">
          <i className="fas fa-plus"></i> New Product
  </Button>
</div>
          </div>
              <Tabs
                defaultActiveKey="pipes"
                id="product-tabs"
                className="mb-3"
              >
                <Tab eventKey="pipes" title="Pipes (0)">
                  <div className="text-center text-muted py-5">
                    <i className="fa fa-box-open fa-3x mb-3"></i>
                    <p>No products in Pipes.</p>
                  </div>
                </Tab>
                <Tab eventKey="screws" title="Screws (0)">
                  <div className="text-center text-muted py-5">
                    <i className="fa fa-box-open fa-3x mb-3"></i>
                    <p>No products in Screws.</p>
                  </div>
                </Tab>
                <Tab eventKey="bolts" title="Bolts (0)">
                  <div className="text-center text-muted py-5">
                    <i className="fa fa-box-open fa-3x mb-3"></i>
                    <p>No products in Bolts.</p>
                  </div>
                </Tab>
                <Tab eventKey="nuts" title="Nuts (0)">
                  <div className="text-center text-muted py-5">
                    <i className="fa fa-box-open fa-3x mb-3"></i>
                    <p>No products in Nuts.</p>
                  </div>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
              
                  
            </div>
          </div>
        </div>

    );
  };
 
export default Productlist;