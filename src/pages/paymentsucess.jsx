import React, { useState } from "react";
import { Button, Card, Modal, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/navbar2";

const PaymentSuccess = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handlePrint = () => window.print();

  const total = 121000;
  const receiptNo = "#00898999917";

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
        <Card className="p-3">
          <h6 className="fw-bold text-center order-h p-2 rounded">Checkout</h6>
          <Row>
            <Col lg={12} className="d-flex flex-column align-items-center">
              {/* Payment Icon */}
              <div className="text-center">
                <img
                  src="/contactless.png" // make sure this path exists in your public folder
                  alt="payment"
                  width="250"
                  height="250"
                />
              </div>

              {/* Total Amount */}
              <Card className="mt-3 shadow-sm text-center fw-bold fs-5 px-4 py-2">
                ₦{total.toLocaleString()}
              </Card>
            </Col>
          </Row>
        </Card>
      </div>

      {/* Success Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>PAYMENT SUCCESSFUL!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Receipt {receiptNo}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePrint}>
            PRINT RECEIPT
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PaymentSuccess;
