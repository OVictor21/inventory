import React, { useState } from "react";
import {
  Container,
  Table,
  Button,
  Card,
  Form,
  InputGroup,
  Pagination,
} from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/navbar2";
import { FaSearch } from "react-icons/fa";

const Orderpage = () => {
  const [activeTab, setActiveTab] = useState("Pipes");

  // Products grouped by category
  const productData = {
    Pipes: [
      {
        id: "021231",
        name: "Pipes",
        price: "₦20,000",
        size: 40,
        qty: 234,
        date: "04/17/25 at 8:25 PM",
        status: "Available",
      },
      {
        id: "021232",
        name: "Pipes",
        price: "₦20,000",
        size: 40,
        qty: 234,
        date: "04/17/25 at 8:25 PM",
        status: "Out of Stock",
      },
    ],
    Screws: [
      {
        id: "031111",
        name: "Screw",
        price: "₦500",
        size: 12,
        qty: 1000,
        date: "04/18/25 at 2:15 PM",
        status: "Available",
      },
      {
        id: "031112",
        name: "Screw",
        price: "₦700",
        size: 16,
        qty: 500,
        date: "04/18/25 at 2:20 PM",
        status: "Available",
      },
    ],
    Bolts: [
      {
        id: "041221",
        name: "Bolt",
        price: "₦2,000",
        size: 25,
        qty: 200,
        date: "04/19/25 at 10:05 AM",
        status: "Available",
      },
    ],
    Nuts: [
      {
        id: "051331",
        name: "Nut",
        price: "₦800",
        size: 10,
        qty: 400,
        date: "04/19/25 at 11:45 AM",
        status: "Out of Stock",
      },
    ],
  };

  const products = productData[activeTab] || [];

  return (
    <div>
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
          <a href="/Previeworder" className="order-t text-primary">Preview Order</a>
        </p>

        <Container className="mt-4">
          <Card
            className="p-3 shadow-sm"
            style={{
              borderRadius: "30px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            {/* Search Bar */}
            <div className="d-flex justify-content-center mb-3">
              <InputGroup style={{ maxWidth: "700px" }}>
                <Form.Control
                  placeholder="Search for id, name product"
                  aria-label="Search"
                />
                <Button variant="outline-secondary">
                  <FaSearch />
                </Button>
              </InputGroup>
            </div>

            {/* Tabs */}
            <div className="account rounded mt-4 fw-medium d-flex justify-content-between align-items-center">
              {["Pipes", "Screws", "Bolts", "Nuts"].map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "primary" : "outline-secondary"}
                  className="me-2"
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </Button>
              ))}
            </div>

            {/* Table */}
            <Table striped bordered hover responsive className="mt-3">
              <thead>
                <tr>
                  <th><Form.Check type="checkbox" /></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Size</th>
                  <th>QTY</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, index) => (
                  <tr key={index}>
                    <td><Form.Check type="checkbox" /></td>
                    <td>
                      <img
                        src="/item.jpg"
                        width="40"
                        height="40"
                        alt="product"
                        className="me-2"
                      />
                      <a href="#">{p.id}</a> <br />
                      {p.name}
                    </td>
                    <td>{p.price}</td>
                    <td>{p.size}</td>
                    <td>{p.qty}</td>
                    <td>{p.date}</td>
                    <td>
                      <span
                        className={`badge ${
                          p.status === "Available" ? "bg-success" : "bg-danger"
                        }`}
                        style={{
                          fontSize: "14px",
                          height: "40px",
                          width: "120px",
                          padding: "10px 22px",
                        }}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td>
                      <Button variant="primary" size="sm" className="rounded">
                        Add to Cart +
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center">
              <small>1 - {products.length} of {products.length} Pages</small>
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Orderpage;
