import React, { useState } from "react";
import { Table, Button, Form, Row, Col, Card, Modal } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/navbar2";

const Checkout = () => {
  const [products, setProducts] = useState([
    { id: 1, code: "021231", name: "Pipes", price: 20000, size: 40, qty: 1 },
    { id: 2, code: "021231", name: "Pipes", price: 20000, size: 40, qty: 1 },
    { id: 3, code: "021231", name: "Pipes", price: 20000, size: 40, qty: 1 },
    { id: 4, code: "021231", name: "Pipes", price: 20000, size: 40, qty: 1 },
    { id: 5, code: "021231", name: "Pipes", price: 20000, size: 40, qty: 1 },
  ]);

  const sellerInfo = {
    firstName: "Cameron",
    lastName: "Williamson",
    email: "Cameron@gmail.com",
    gender: "Male",
    dob: "23 Desember 2003",
    image: "/user.png",
  };

  const [showReceipt, setShowReceipt] = useState(false);

  const updateQty = (id, delta) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p
      )
    );
  };

  // Totals
  const subtotal = products.reduce((acc, p) => acc + p.price * p.qty, 0);
  const tax = 1000;
  const total = subtotal + tax;

  const handleProceed = () => setShowReceipt(true);
  const handleClose = () => setShowReceipt(false);
  const handlePrint = () => window.print();

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
          <a href="/Dashboard" className="order-t">Dashboard &gt;</a>
          <a href="/Order" className="order-t">Order &gt;</a>
          <a href="/Products" className="order-t">Products &gt;</a>
          <a href="/Previeworder" className="order-t text-primary">Checkout</a>
        </p>

        <Card className="p-3">
          <h6 className="fw-bold text-center order-h p-2 rounded">Checkout</h6>
          <Row>
            {/* Left: Product Table */}
            <Col lg={8}>
              <Card className="p-3 mb-3">
                <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                  <Table bordered hover responsive className="align-middle">
                    <thead className="bg-light">
                      <tr>
                        <th><Form.Check type="checkbox" /></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Size</th>
                        <th>QTY</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((p) => (
                        <tr key={p.id}>
                          <td><Form.Check type="checkbox" /></td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="/item.jpg"
                                alt="product"
                                width="40"
                                height="40"
                                className="me-2"
                              />
                              <div>
                                <a href="/" className="text-decoration-none fw-bold d-block">
                                  {p.code}
                                </a>
                                <small className="text-muted">{p.name}</small>
                              </div>
                            </div>
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
              </Card>

              {/* Total Amount Box */}
              {/* Total Amount Box */}
{/* Total Amount Box (Centered) */}
<div className="d-flex justify-content-center mt-3">
  <Card
    className="p-3"
    style={{ width: "600px", fontSize: "14px", borderRadius:"40px" }}
  >
    <h6 className="fw-bold text-start">Total Amount</h6>
    <div className="d-flex justify-content-between">
      <span>Sub total</span>
      <span className="text-primary">₦120,000</span>
    </div>
    <div className="d-flex justify-content-between">
      <span>TAX</span>
      <span className="text-primary">₦1,000</span>
    </div>
    <hr />
    <div className="d-flex justify-content-between fw-bold">
      <span>TOTAL</span>
      <span className="text-primary">₦121,000</span>
    </div>
  </Card>
</div>


              {/* Payment Method */}
              <div className="card p-3 mt-3" style={{ maxWidth: "400px", borderRadius:"30px" }}>
  <h6>Payment Method</h6>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="paymentMethod"
      id="transfer"
      value="transfer"
    />
    <label className="form-check-label" htmlFor="transfer">
      Transfer
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="paymentMethod"
      id="cash"
      value="cash"
    />
    <label className="form-check-label" htmlFor="cash">
      Cash
    </label>
  </div>
</div>


              {/* Action buttons */}
      
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
      <Form.Control type="text" value={sellerInfo.firstName} readOnly />
    </Form.Group>
    <Form.Group className="mb-2">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" value={sellerInfo.lastName} readOnly />
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

  {/* Buttons under the card with space */}
  <div className="d-flex justify-content-between mt-3">
    <Button variant="outline-secondary">Cancel</Button>
    <Button variant="primary"onClick={handleProceed}>Proceed</Button>
  </div>
</Col>

          </Row>
        </Card>
       {/* ✅ Receipt Modal */}
<Modal show={showReceipt} onHide={handleClose} size="lg" centered>
  <Modal.Header closeButton>
    <Modal.Title>Receipt</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {/* Company Info */}
    <div className="text-center mb-3">
      <h5 className="fw-bold">Bestwort JVP Company</h5>
      <p className="mb-1">Odun Ade, Lagos</p>
      <p className="mb-1">Tel: 08035068506, 08035078379</p>
    </div>

    {/* Receipt Details */}
    <div className="mb-3">
      <div>
        <p className="mb-1"><strong>Receipt No:</strong> RCPT-1757104168483-729</p>
        <p className="mb-1"><strong>Date & Time:</strong> {new Date().toLocaleString()}</p>
        <p className="mb-1"><strong>Sales Rep:</strong> {sellerInfo.firstName} {sellerInfo.lastName}</p>
        <p className="mb-1"><strong>Payment Method:</strong> POS</p>
      </div>
    </div>

    {/* Products Table */}
    <Table bordered>
      <thead>
        <tr>
          <th>Product</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.qty}</td>
            <td>₦{p.price.toLocaleString()}</td>
            <td>₦{(p.price * p.qty).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>

    {/* Totals */}
    <div className="d-flex justify-content-between fw-bold mt-3">
      <span>Subtotal</span>
      <span>₦{subtotal.toLocaleString()}</span>
    </div>
    <div className="d-flex justify-content-between">
      <span>Tax</span>
      <span>₦{tax.toLocaleString()}</span>
    </div>
    <div className="d-flex justify-content-between fw-bold fs-5 mt-2">
      <span>Total</span>
      <span>₦{total.toLocaleString()}</span>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handlePrint}>
      Print Receipt
    </Button>
  </Modal.Footer>
</Modal>

      </div>
    </div>
  );
};

export default Checkout;
