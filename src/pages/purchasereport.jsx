// src/pages/purchasereport.jsx
import React, { useState } from "react";
import {
  Container,
  Table,
  Button,
  Form,
  InputGroup,
  Card,
  Pagination,
  Dropdown,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ use Link for real navigation
import { FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/navbar2";

const PurchaseReport = () => {
  const activeTab = "All Orders"; // ✅ remove unused setter

  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filterPayment, setFilterPayment] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const orders = [
    { id: "021231", product: "Pipes", user: "Napoleon", price: "₦20,000", date: "04/17/23", payment: "Paid", status: "Done" },
    { id: "021232", product: "Bolts", user: "Joseph", price: "₦15,000", date: "04/18/23", payment: "Unpaid", status: "Canceled" },
    { id: "021233", product: "Nails", user: "Mary", price: "₦10,000", date: "04/19/23", payment: "Paid", status: "Done" },
  ];

  const filteredOrders = orders.filter((order) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      order.id.toLowerCase().includes(q) ||
      order.product.toLowerCase().includes(q) ||
      order.user.toLowerCase().includes(q);

    const matchesPayment = filterPayment === "All" || order.payment === filterPayment;
    const matchesStatus = filterStatus === "All" || order.status === filterStatus;

    return matchesSearch && matchesPayment && matchesStatus;
  });

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredOrders);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Purchase Report");
    XLSX.writeFile(workbook, "purchase_report.xlsx");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Purchase Report", 14, 10);
    doc.autoTable({
      head: [["ID", "Product", "User", "Price", "Date", "Payment", "Status"]],
      body: filteredOrders.map((order) => [
        order.id,
        order.product,
        order.user,
        order.price,
        order.date,
        order.payment,
        order.status,
      ]),
    });
    doc.save("purchase_report.pdf");
  };

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
        <h3 className="fw-bold">Purchase Report</h3>
        <p className="text-muted">
          Dashboard &gt; <span className="text-primary">Purchase Report</span>
        </p>

        <Container fluid className="mt-4">
          <Card className="p-3 shadow-sm" style={{ borderRadius: "15px" }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <InputGroup style={{ maxWidth: "400px" }}>
                <Form.Control
                  placeholder="Search for id, name, product"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search purchase orders by id, product, or user"
                />
                <Button variant="outline-secondary" aria-label="Search">
                  <FaSearch />
                </Button>
              </InputGroup>

              <div>
                <Button
                  variant="outline-secondary"
                  className="me-2"
                  onClick={() => setShowFilter(true)}
                >
                  Filter
                </Button>
                <Button
                  variant="outline-secondary"
                  className="me-2"
                  onClick={exportExcel}
                >
                  Export Excel
                </Button>
                <Button
                  variant="outline-secondary"
                  className="me-2"
                  onClick={exportPDF}
                >
                  Export PDF
                </Button>
                <Button variant="primary">+ New Order</Button>
              </div>
            </div>

            <h6 className="fw-bold text-center order-h p-2 rounded">
              {activeTab}
            </h6>

            <Table striped hover responsive>
              <thead>
                <tr>
                  <th>
                    <Form.Check type="checkbox" aria-label="Select all purchase orders" />
                  </th>
                  <th>Orders</th>
                  <th>Users</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, index) => (
                  <tr key={index}>
                    <td>
                      <Form.Check type="checkbox" aria-label={`Select order ${order.id}`} />
                    </td>
                    <td>
                      <img
                        src="/item.jpg"
                        alt={order.product}
                        width="30"
                        height="30"
                        className="me-2"
                      />
                      {/* ✅ Real, navigable link – fixes jsx-a11y/anchor-is-valid */}
                      <Link
                        to={`/purchases/${order.id}`}
                        className="fw-bold text-decoration-none"
                        aria-label={`View purchase order ${order.id}`}
                      >
                        {order.id}
                      </Link>
                      <br />
                      {order.product}
                    </td>
                    <td>{order.user}</td>
                    <td>{order.price}</td>
                    <td>{order.date}</td>
                    <td>
                      <span
                        className={`badge ${order.payment === "Paid" ? "bg-success" : "bg-warning"}`}
                        style={{ fontSize: "14px", height: "40px", width: "120px", padding: "10px 22px" }}
                      >
                        {order.payment}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`badge ${order.status === "Done" ? "bg-primary" : "bg-danger"}`}
                        style={{ fontSize: "14px", height: "40px", width: "120px", padding: "10px 22px" }}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle as="span" style={{ cursor: "pointer" }} aria-label={`Actions for ${order.id}`}>
                          <BsThreeDotsVertical />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to={`/purchases/${order.id}`}>Edit</Dropdown.Item>
                          <Dropdown.Item>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="d-flex justify-content-between align-items-center">
              <small>
                1 - {filteredOrders.length} of {orders.length} Records
              </small>
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </Card>
        </Container>
      </div>

      <Modal show={showFilter} onHide={() => setShowFilter(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Filter Orders</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Payment</Form.Label>
              <Form.Select
                value={filterPayment}
                onChange={(e) => setFilterPayment(e.target.value)}
                aria-label="Filter by payment status"
              >
                <option>All</option>
                <option>Paid</option>
                <option>Unpaid</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                aria-label="Filter by order status"
              >
                <option>All</option>
                <option>Done</option>
                <option>Canceled</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowFilter(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowFilter(false)}>
            Apply Filter
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PurchaseReport;
