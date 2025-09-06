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


const AddProduct = () => {
  return (
     <div>
     
      <div
      >
        <Navbar2/>
        <Sidebar />

        {/* Main Content */}
        <div
            className="main-content"
              style={{
               marginLeft: "250px", 
              paddingTop: "100px",  
              backgroundColor: "#F7F7F7",
              padding: "1rem",
              width: "calc(100% - 250px)",
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
            {/* Hidden file input */}
            <input
              type="file"
              id={`fileUpload-${photo}`}
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  alert(`Photo ${photo} uploaded: ${file.name}`);
                  // 👉 Later you can store it in state instead of alert
                }
              }}
            />

            {/* Clickable box */}
            <label
              htmlFor={`fileUpload-${photo}`}
              className="border rounded-3 p-3 text-center w-100"
              style={{
                cursor: "pointer",
                backgroundColor: "#f8f9fa",
                display: "block",
              }}
            >
              <i className="fas fa-image fa-2x mb-2 text-secondary"></i>
              <div className="text-muted">Photo {photo}</div>
            </label>
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
