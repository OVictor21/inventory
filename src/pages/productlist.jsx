import {
  Tabs,
  Form,
  Button,
  Card,
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/navbar2";


const Productlist = () => {
   
  return (
     <div>
        <Navbar2/>
        <Sidebar />
    
          <div>
           
           
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