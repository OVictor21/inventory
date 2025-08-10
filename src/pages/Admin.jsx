import Navbar from "../components/navbar";
import { Card, Container, Button } from "react-bootstrap";
import React, { useRef } from "react";

const testimonials = [
  {
    name: "Billy Kavanagh",
    role: "Operations Associate at Healf",
    image: "/user1.png",
    stars: 5,
    message:
      "Amazing App. Gives a great visual on current and future inventory. We decreased stockout from 4% to 1% in 2 months with Prediko. That’s hundreds of thousands of extra revenue per year unlocked! Team are super supportive to any requests too! Would highly recommend!",
  },
  {
    name: "Alix Beckstrand",
    role: "Ops manager at Kate Hewko",
    image: "/user2.jpg",
    stars: 5,
    message:
      "The software and customer service are amazing! Prediko’s advanced analytics and reporting tools empowered us at Kate Hewko to predict demand patterns accurately, optimizing stock replenishment and reducing stockouts.",
  },
  {
    name: "Rayan Mroue",
    role: "Founder and CEO at Cloudsharks",
    image: "/user3.jpg",
    stars: 5,
    message:
      "Prediko helps me forecast my sales accurately and tells me how much I should order. Plus as a whole it's much more robust than my previous software (Cogsy), which is something I needed for a business as SKU heavy as mine.",
  },
  {
    name: "Tina Moore",
    role: "Inventory Analyst at SmartMart",
    image: "/user1.png",
    stars: 4,
    message:
      "A very efficient tool! Inventory visibility has improved, and customer satisfaction is up.",
  },
  {
    name: "James Turner",
    role: "COO at QuickStock",
    image: "/user2.jpg",
    stars: 5,
    message:
      "We no longer run out of our best-selling items. Prediko has changed the way we stock!",
  },
  {
    name: "Rita Gomez",
    role: "Retail Manager at GreenCart",
    image: "/user3.jpg",
    stars: 4,
    message:
      "We love how intuitive the dashboard is. Stock prediction is no longer a guessing game.",
  },
];

const Admin = () => {
  const scrollRef = useRef();

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="bg-light ">
      <Navbar />
      <div className="bg-light min-vh-100 mt-5">
        {/* Hero Section */}
        <div className="container text-center py-5">
          <h1 className="fw-bold display-5">
            Restock on <span className="text-dark">time</span>,{" "}
            <span className="text-primary">every time</span>.
          </h1>
          <p className="lead mt-3 mb-4">
            Richbon helps brands and stores keep track of their day to day
            operations.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary p-3">Sign In</button>
            <button className="btn btn-outline-primary me-3 p-3">
              Register With Us Today
            </button>
          </div>
        </div>

        {/* Dashboard Preview Section */}
        <div className="container mb-5">
          <img
            src="/dashboard.png"
            alt="Dashboard Preview"
            className="img-fluid rounded shadow"
          />
        </div>
        {/* Trusted By Section */}
        <div className="bg-white py-5">
          <div className="container text-center">
            <h5 className="fw-bold mb-4">
              Trusted by <span className="text-primary">100+</span> Stores and
              Brands
            </h5>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <div className="text-muted fst-italic">
                "Intuitive & powerful features"
              </div>
              <div className="text-muted fst-italic">
                "Out of stock percent is down"
              </div>
              <div className="text-muted fst-italic">"Powerful tool"</div>
              <div className="text-muted fst-italic">
                "Predicts demand accurately"
              </div>
              <div className="text-muted fst-italic">"Saves time & money"</div>
            </div>
          </div>
        </div>

        {/* Inventory Advantage Section */}
        <div className="bg-light py-5">
          <div className="container text-center">
            <h3 className="fw-bold">
              Turn your inventory operations <br />
              <span className="text-primary">into a competitive advantage</span>
            </h3>
          </div>
        </div>

        {/* Feature Grid Section */}
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-12">
              <div
                className="p-4 rounded shadow d-flex align-items-center justify-content-between"
                style={{
                  backgroundColor: "#e2e6f3ff",
                  border: "6px solid white",
                }}
              >
                <div className="text-start me-3">
                  <h5 className="fw-bold mb-1">One tab to rule them all</h5>
                  <p className="text-muted mb-0">
                    Monitor your inventory data in real time
                  </p>
                </div>
                <img
                  src="/dashboardpreview.png"
                  alt="Best Sellers"
                  className="img-fluid rounded"
                  style={{
                    maxWidth: "300px",
                    width: "100%",
                    marginRight: "-1.6vw",
                  }}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="p-4 rounded shadow h-100 text-center"
                style={{
                  backgroundColor: "#e2e6f3ff",
                  border: "6px solid white",
                }}
              >
                <h6 className="grw-text text-start">Unlock growth </h6>
                <h6 className="grw-text text-start">
                  by eliminating out of stock
                </h6>

                <p className="text-start iv-text mb-0 ">
                  An inventory Reminder to help
                </p>
                <p className="text-start iv-text mb-2">
                  alert you to low stock counts
                </p>

                <img
                  src="/ivstock.jpg"
                  alt="Inventory"
                  className="img-fluid rounded"
                  style={{
                    maxWidth: "300px",
                    width: "100%",
                    marginTop: "1.6vw",
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="p-4 rounded shadow h-100 text-center"
                style={{
                  backgroundColor: "#e2e6f3ff",
                  border: "6px solid white",
                }}
              >
                <h6 className="grw-text text-start">Save time on POS</h6>
                <h6 className="grw-text text-start">and production tracking</h6>
                <p className="text-start iv-text mb-0 ">
                  Create, manage, and track purchase{" "}
                </p>
                <p className="text-start iv-text mb-2">
                  orders with your team{" "}
                </p>
                <img
                  src="/purchaseorder.png"
                  alt="PO Tracker"
                  className="img-fluid rounded"
                  style={{
                    maxWidth: "300px",
                    width: "100%",
                    marginTop: "1.6vw",
                  }}
                />
              </div>
            </div>
            <div className="col-12">
              <div
                className="p-4 rounded shadow d-flex align-items-center justify-content-between"
                style={{
                  backgroundColor: "#e2e6f3ff",
                  border: "6px solid white",
                }}
              >
                <img
                  src="/stafflogin.png"
                  alt="Login Center"
                  className="img-fluid me-3"
                  style={{
                    maxWidth: "300px",
                    width: "100%",
                    marginTop: "1.6vw",
                  }}
                />
                <div>
                  <h6 className="fw-bold">
                    Fast & flexible staff management monitor
                  </h6>
                  <p className="text-muted mb-0">
                    See the timely login of each staff
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Container className="text-center my-5">
          <h2 className="fw-bold mb-4">
            Loved by <span className="text-primary">100s of Store</span> owners
          </h2>

          <div
            className="d-flex overflow-auto gap-4 px-2 custom-scrollbar"
            style={{
              scrollBehavior: "smooth",
            }}
            ref={scrollRef}
          >
            {testimonials.map((t, i) => (
              <Card
                key={i}
                className="shadow-sm p-3 rounded-4 flex-shrink-0 user-card"
                style={{ minWidth: "300px", maxWidth: "300px" }}
              >
                <Card.Body>
                  <div className="d-flex align-items-center gap-3 mb-3 ">
                    <img
                      src={t.image}
                      alt={t.name}
                      width="60"
                      height="60"
                      className="rounded-circle border"
                    />
                    <div className="text-start">
                      <h6 className="mb-0 fw-bold">{t.name}</h6>
                      <small className="text-muted">{t.role}</small>
                    </div>
                  </div>
                  <div className="mb-2 text-warning">
                    {"★".repeat(t.stars)}
                    {"☆".repeat(5 - t.stars)}
                  </div>
                  <p className="text-muted text-start small">{t.message}</p>
                </Card.Body>
              </Card>
            ))}
          </div>

          {/* Navigation buttons placed under the card container */}
          <div className="mt-3 d-flex justify-content-center gap-3">
            <button
              className="btn btn-light shadow"
              onClick={() => scroll(-320)}
            >
              ‹
            </button>
            <button
              className="btn btn-light shadow"
              onClick={() => scroll(320)}
            >
              ›
            </button>
          </div>
        </Container>

        <div
          className="mx-auto text-center d-flex flex-column align-items-center"
          style={{
            // overlay + image
            backgroundImage: "url('/Container.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "24px",
            overflow: "hidden",
            padding: "100px 24px",
            maxWidth: "1064px",
            gap: "95px",
          }}
        >
          <div>
            <h2
              className="fw-bold mb-0"
              style={{
                fontSize: "61.1px",
                lineHeight: 1.1,
                color: "#0B1D4A",
                letterSpacing: "-0.5px",
              }}
            >
              Take control of your
            </h2>
            <h2
              className="fw-bold mb-0"
              style={{
                fontSize: "61.1px",
                lineHeight: 1.1,
                color: "#0B1D4A",
                letterSpacing: "-0.5px",
              }}
            >
              inventory operations.
            </h2>
          </div>

          <Button
            className="px-4 py-2"
            style={{
              backgroundColor: "#2F6EF6",
              border: "none",
              fontSize: "12px",
              textTransform: "uppercase",
              width: "320px",
              height: "44px",
              borderRadius: "8px",
              boxShadow: "0 10px 20px rgba(47,110,246,0.35)",
            }}
          >
            Join Us Today
          </Button>
        </div>

        <footer className="foot text-primary py-4 px-5">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Social Icons */}
              <div className="col-md-3 mb-4 mb-md-0 text-center text-md-start">
                <div className="d-flex justify-content-center justify-content-md-start gap-3 mb-2">
                  <i className="bi bi-linkedin fs-5"></i>
                  <i className="bi bi-twitter fs-5"></i>
                  <i className="bi bi-facebook fs-5"></i>
                </div>
                <small className="text-muted">All rights reserved</small>
              </div>

              {/* Company Links */}
              <div className="col-md-2 mb-3 mb-md-0">
                <h6 className="fw-bold">Company</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-primary text-decoration-none">
                      About & Investors
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary text-decoration-none">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary text-decoration-none">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary text-decoration-none">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              {/* Other Links */}
              <div className="col-md-2 mb-3 mb-md-0">
                <h6 className="fw-bold">Other</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-primary text-decoration-none">
                      Product Updates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary text-decoration-none">
                      Impact Calculator
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary text-decoration-none">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary text-decoration-none">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Other Links Duplicate */}
              <div className="col-md-2 mb-3 mb-md-0">
                <h6 className="fw-bold">Other</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-primary text-decoration-none">
                      Product Updates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary text-decoration-none">
                      Impact Calculator
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary text-decoration-none">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary text-decoration-none">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Buttons */}
              <div className="col-md-3 text-center text-md-end">
                <button className="btn btn-primary me-2">Sign Up</button>
                <button className="btn btn-outline-primary">Login</button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Admin;
