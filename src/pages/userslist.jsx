import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/navbar2";
import React, { useState } from "react";
import { Table, Button, Form, InputGroup, Dropdown, Pagination, Card } from "react-bootstrap";
import { FaPlus, FaTrash, FaEdit, FaEye } from "react-icons/fa";

const Userslist = () => {
   const [search, setSearch] = useState("");
  const [users] = useState([
    {
      id: "ID12451",
      name: "Napoleon",
      email: "Napoleon@gmail.com",
      phone: "08126241380",
      gender: "Male",
      dob: "24/02/2004",
      address: "NO 5, FIRST STACK street rainbow, Lagos",
    },
    {
      id: "ID12452",
      name: "Napoleon",
      email: "Napoleon@gmail.com",
      phone: "08126241380",
      gender: "Male",
      dob: "24/02/2004",
      address: "NO 5, FIRST STACK street rainbow, Lagos",
    },
    {
      id: "ID12453",
      name: "Napoleon",
      email: "Napoleon@gmail.com",
      phone: "08126241380",
      gender: "Male",
      dob: "24/02/2004",
      address: "NO 5, FIRST STACK street rainbow, Lagos",
    },
  ]);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
    <Navbar2/>
    <Sidebar/>
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
        <div className="mb-4">
        <h4 className="fw-bold">Users</h4>
       <span className="medium ">
                 <Link to="/dashboard" className="medium das">Dashboard</Link>
                 <span className="mx-1"><i className="fa-solid fa-chevron-right"></i></span>
                 <Link to="/profile" className="medium fw-bold das1">Users</Link>
                 </span>
      </div>

       <div className="container mt-4">
      <Card className="shadow-sm border-0 rounded-4">
        <Card.Body>
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            {/* Search Bar */}
            <InputGroup style={{ maxWidth: "300px" }}>
              <Form.Control
                placeholder="Search for id, name Customer"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>

            {/* Buttons */}
            <div className="d-flex gap-2">
              <Dropdown>
                <Dropdown.Toggle variant="light">Filter</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Male</Dropdown.Item>
                  <Dropdown.Item>Female</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="light">Export</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Export CSV</Dropdown.Item>
                  <Dropdown.Item>Export PDF</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button variant="primary">
                <FaPlus className="me-1" /> Add New User
              </Button>
            </div>
          </div>

          {/* Users Table */}
          <Table hover responsive borderless className="align-middle">
            <thead className="table-light text-muted">
              <tr>
                <th>
                  <Form.Check type="checkbox" />
                </th>
                <th>Name Customer</th>
                <th>Contact</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, i) => (
                <tr key={i}>
                  <td>
                    <Form.Check type="checkbox" />
                  </td>
                  <td>
                    <div>
                      <a
                        href="/"
                        className="text-primary fw-bold text-decoration-none"
                      >
                        {user.id}
                      </a>
                      <div>{user.name}</div>
                    </div>
                  </td>
                  <td>
                    {user.email}
                    <br />
                    {user.phone}
                  </td>
                  <td>{user.gender}</td>
                  <td>{user.dob}</td>
                  <td>{user.address}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <Button variant="light" size="sm">
                        <FaEye />
                      </Button>
                      <Button variant="light" size="sm">
                        <FaEdit />
                      </Button>
                      <Button variant="light" size="sm" className="text-danger">
                        <FaTrash />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted small">
              1 - {filteredUsers.length} of {users.length} Pages
            </span>
            <Pagination size="sm">
              <Pagination.Prev />
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </Card.Body>
      </Card>
    </div>
      </div>
      
    </div>
  )
}

export default Userslist;
