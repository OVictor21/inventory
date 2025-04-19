import { useState } from "react";
import Navbar from "../components/navbar";

const Adduser = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    username: "",
    role: "SALESPERSON", // Default role set to SALESPERSON
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://sims-mup1.onrender.com/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      redirect: "follow",
    })
      .then(async (response) => {
        const data = await response.json();
    
        if (!response.ok) {
          throw new Error(data.message || "Failed to add user");
        }
    
        // Success
        console.log("Success:", data);
        alert("User added successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(error.message || "An error occurred while adding user.");
      });
    
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4 admin-body">
        <div
          className="card shadow p-3"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <h3 className="text-center mb-4 signuptext">Add an Account</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>

            {/* Username Field */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            {/* Role Selection Dropdown */}
            <div className="mb-3">
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <select
                id="role"
                className="form-control"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="ADMIN">ADMIN</option>
                <option value="SALESPERSON">SALESPERSON</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="text-center py-3 w-100 footers text-white">
        <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Adduser;
