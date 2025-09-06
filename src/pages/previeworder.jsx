import React, { useState } from "react";
import { Table, Button, Form, Row, Col, Card } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/navbar2";
import { Link } from "lucide-react";

const PreviewOrder = () => {
  // Dummy product list (can be replaced with DB/API fetch later)
  const [products, setProducts] = useState([
    { id: 1, code: "021231", name: "Pipes", price: 20000, size: 40, qty: 1 },
    { id: 2, code: "021231", name: "Pipes", price: 20000, size: 40, qty: 1 },
    { id: 3, code: "021231", name: "Pipes", price: 20000, size: 40, qty: 1 },
    { id: 4, code: "021231", name: "Pipes", price: 20000, size: 40, qty: 1 },
    { id: 5, code: "021231", name: "Pipes", price: 20000, size: 40, qty: 1 },
  ]);

  // Seller info dummy data
  const sellerInfo = {
    firstName: "Napoleon",
    lastName: "Mark",
    email: "Napoleonmark@gmail.com",
    gender: "Male",
    dob: "23 December 2003",
    image: "/user.png", // Replace with actual image path
  };

  // Update qty
  const updateQty = (id, delta) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p
      )
    );
  };

  return (
    <div className="container-fluid py-3">
      <Navbar2 />
      <Sidebar />
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
      <h3 className="fw-bold">Orders</h3>
      <p className="text-muted">
        <a href="/Dashbord" className="order-t">Dashboard &gt;</a> 
        <a href="/Order" className="order-t">Order &gt;</a>
        <a href="/Products"className="order-t">Products &gt;</a> 
        <a href="/Previeworder"className="order-t text-primary">Preview Order</a>
        </p>

      <Card className="p-3">
  <h6 className="fw-bold text-center order-h p-2 rounded">Preview Order</h6>
  <Row>
    {/* Left: Product Table inside its own box */}
    <Col lg={8}>
      <Card className="p-3">
        <div style={{ maxHeight: "300px", overflowY: "auto" }}>
          <Table bordered hover responsive className="align-middle">
            <thead className="bg-light">
              <tr>
                <th>
                  <Form.Check type="checkbox" />
                </th>
                <th>Product</th>
                <th>Price</th>
                <th>Size</th>
                <th>QTY</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>
                    <Form.Check type="checkbox" />
                  </td>
                  <td>
                    <img
                      src="/item.jpg"
                      alt="product"
                      width="40"
                      height="40"
                      className="me-2"
                    />
                    <a href="/" className="text-decoration-none fw-bold">
                      {p.code}
                    </a>{" "}
                    <br />
                    {p.name}
                  </td>
                  <td>₦{p.price.toLocaleString()}</td>
                  <td>{p.size}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => updateQty(p.id, -1)}
                      >
                        -
                      </Button>
                      <span className="px-3">{p.qty}</span>
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => updateQty(p.id, 1)}
                      >
                        +
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

       {/* Action buttons inside box */}
<div className="d-flex justify-content-between align-items-center mt-3">
  {/* Left */}
  <Button variant="outline-primary">Cancel</Button>

  {/* Middle */}
  <div className="d-flex gap-2">
    <Button variant="outline-secondary">Filter</Button>
    <Button variant="outline-secondary">Delete</Button>
    <Button variant="primary">Add Items +</Button>
  </div>

  {/* Right */}
  <Button variant="primary">Checkout</Button>
</div>


        {/* Pagination inside box */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <small>1 - 10 of 13 Pages</small>
          <Form.Select size="sm" style={{ width: "80px" }}>
            <option>1</option>
            <option>2</option>
          </Form.Select>
        </div>
      </Card>
    </Col>

    {/* Right: Seller Information */}
    <Col lg={4}>
      <Card className="p-3">
        <div className="d-flex align-items-center mb-3">
          <img
            src={sellerInfo.image}
            alt="seller"
            className="rounded-circle me-3"
            width="60"
            height="60"
          />
          <h6 className="fw-bold">Seller Information</h6>
        </div>
        <Form.Group className="mb-2">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={sellerInfo.firstName}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={sellerInfo.lastName}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={sellerInfo.email} readOnly />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Gender</Form.Label>
          <Form.Control type="text" value={sellerInfo.gender} readOnly />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Date Birthday</Form.Label>
          <Form.Control type="text" value={sellerInfo.dob} readOnly />
        </Form.Group>
      </Card>
    </Col>
  </Row>
</Card>

    </div>
    </div>
  );
};

export default PreviewOrder;
