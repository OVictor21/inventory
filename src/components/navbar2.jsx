import { Navbar, Nav, Form} from "react-bootstrap";

const navbar2 = () => {
  return (
    <div>
        
         <div className="main-col">
        <div className="topbar  ">
          <Navbar
            expand="lg"
            className="topbar sticky-top d-flex justify-content-between align-items-center px-4 py-2"
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
      </div>
      </div>
    </div>
  )
}

export default navbar2
