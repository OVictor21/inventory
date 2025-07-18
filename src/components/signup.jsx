import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, InputGroup} from "react-bootstrap";


const Signup = () => {
  return (
   <Container fluid className="bg-white min-vh-100 d-flex align-items-center justify-content-center mt-5 mt-md-0">
         <Row className="w-100">
           <Col xs={12} md={6} lg={4} className="mx-auto">
             {/* Logo + Text */}
             <div className="position-absolute top-0 start-0 p-3 d-flex align-items-center">
               <img
                 src="./logo.png"
                 alt="Logo"
                 className="me-1 logo"
               />
               <h1 className="fw-bold">Bestworth</h1>
             </div>
   
             <div className="p-4 shadow rounded bg-white mt-5">
               <h3 className="fw-bold mb-4">Register an Account</h3>
   
               <Button variant="outline-primary" className="w-100 mb-3 d-flex align-items-center justify-content-center">
                 <img
                   src="https://www.svgrepo.com/show/475656/google-color.svg"
                   alt="Google"
                   width="20"
                   height="20"
                   className="me-2"
                 />
                 Sign in with Google
               </Button>
   
               <div className="d-flex align-items-center my-3">
                 <div className="flex-grow-1 border-top"></div>
                 <span className="mx-2 text-muted">Or</span>
                 <div className="flex-grow-1 border-top"></div>
               </div>
   
               <Form>
                 <Row>
                {/* First Name */}
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" />
                  </Form.Group>
                </Col>

                {/* Last Name */}
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                {/* Gender */}
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3" controlId="formGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select>
                      <option>Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                </Row>


                 <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label>Email</Form.Label>
                   <InputGroup>
                     <Form.Control type="email" placeholder="Enter email" />
                     <InputGroup.Text></InputGroup.Text>
                   </InputGroup>
                 </Form.Group>
   
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                   <Form.Label>Password</Form.Label>
                   <InputGroup>
                     <Form.Control type="password" placeholder="Input password" />
                     <InputGroup.Text></InputGroup.Text>
                   </InputGroup>
                 </Form.Group>
   
                 <div className="d-flex justify-content-between align-items-center mb-3">
                   <Form.Check type="checkbox" label="Remember me ?" />
                   <a href="#" className="text-decoration-none">
                     Forget Password
                   </a>
                 </div>
   
                 <Button variant="primary" type="submit" className="w-100">
                   Sign In
                 </Button>
               </Form>
   
               <p className="mt-3 text-center text-muted">
                 Do not have account?{" "}
                 <a href="#" className="text-decoration-none">
                   Sign Up
                 </a>
               </p>
             </div>
           </Col>
         </Row>
       </Container>
  );
};

export default Signup;
