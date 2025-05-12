import { useState } from "react";
import Navbar from "../components/navbar";
import axiosInstance from "../utils/axiosInstance";
import { Snackbar, Alert } from "@mui/material";

const Adduser = () => {
const [formData, setFormData] = useState({
firstname: "",
lastname: "",
phone: "",
email: "",
password: "",
username: "",
role: "SALESPERSON",
});

const [loading, setLoading] = useState(false);

const [snack, setSnack] = useState({
open: false,
message: "",
severity: "success",
});

const handleChange = (e) => {
const { id, value } = e.target;
setFormData((prev) => ({
...prev,
[id]: value,
}));
};

const handleClose = () => setSnack((prev) => ({ ...prev, open: false }));

const validateForm = () => {
const { email, phone, password } = formData;
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
if (!emailRegex.test(email)) return "Invalid email address";
if (!/^\d{7,15}$/.test(phone)) return "Phone number must be 7-15 digits";
if (password.length < 6) return "Password must be at least 6 characters";
return null;
};

const handleSubmit = async (e) => {
e.preventDefault();

const validationError = validateForm();
if (validationError) {
  setSnack({ open: true, message: validationError, severity: "error" });
  return;
}

try {
  setLoading(true);

  const payload = { ...formData };

  await axiosInstance.post("/users/", payload, { withCredentials: true });

  setSnack({
    open: true,
    message: "User added successfully!",
    severity: "success",
  });

  setFormData({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    username: "",
    role: "SALESPERSON",
  });

} catch (error) {
  console.error("Error:", error);
  setSnack({
    open: true,
    message:
      error.response?.data?.error ||
      error.response?.data?.message ||
      "Failed to add user.",
    severity: "error",
  });
} finally {
  setLoading(false);
}
}
return (
  <div className="d-flex flex-column min-vh-100">
  <Navbar />
  <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4 admin-body">
    <div className="card shadow p-3" style={{ maxWidth: "500px", width: "100%" }}>
      <h3 className="text-center mb-4 signuptext">Add an Account</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstname" value={formData.firstname} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastname" value={formData.lastname} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" value={formData.username} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <select id="role" className="form-control" value={formData.role} onChange={handleChange} required>
            <option value="ADMIN">ADMIN</option>
            <option value="SALESPERSON">SALESPERSON</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="d-grid mt-3">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
    </div>
  </div>

  <footer className="text-center py-3 w-100 footers text-white">
    <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
  </footer>

  <Snackbar
    open={snack.open}
    autoHideDuration={3000}
    onClose={handleClose}
    anchorOrigin={{ vertical: "top", horizontal: "center" }}
  >
    <Alert onClose={handleClose} severity={snack.severity} sx={{ width: "100%" }}>
      {snack.message}
    </Alert>
  </Snackbar>
</div>
);
}  

export default Adduser;
