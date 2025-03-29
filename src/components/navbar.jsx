import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user data from localStorage on component mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user session
    alert("You have been logged out.");
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-md justify-content-center p-3 z-1">
      <a className="navbar-brand d-flex me-auto" href="/">
        <img className="block w-100" src="/logo.png" alt="Logo" />
      </a>
      <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="collapseNavbar">
        <ul className="navbar-nav justify-content-center w-100">
          <li className="nav-item m-2"><a className="nav-link nav-text" href="/Admin">Home</a></li>
          <li className="nav-item m-2"><a className="nav-link nav-text" href="/Products">Products</a></li>
          <li className="nav-item m-2"><a className="nav-link nav-text" href="/Inventory">Inventory</a></li>
          <li className="nav-item m-2"><a className="nav-link nav-text" href="/Order">Order</a></li>
          <li className="nav-item m-2"><a className="nav-link nav-text" href="/Notifications">Notifications</a></li>
          <li>
            <div className="dropdown m-2">
              <button type="button" className="btn dropdown-toggle nav-link nav-text" data-bs-toggle="dropdown">
                Settings
              </button>
              <ul className="dropdown-menu drop bg-body-secondary">
                <li><a className="dropdown-item" href="/Editprofile">Edit Profile</a></li>
                <li><a className="dropdown-item" href="/Security">Security</a></li>
                <li><a className="dropdown-item" href="/Adduser">Add an Account</a></li>
                <li><a className="dropdown-item" href="/Removeuser">Remove user Account</a></li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto justify-content-end mx-5">
          {user ? (
            <li className="nav-item logout p-2 rounded-2 text-nowrap">
              <button className="btn btn-danger" onClick={handleLogout}>
                Log out
              </button>
            </li>
          ) : (
            <li className="nav-item p-2">
              <a className="nav-link nav-text-2" href="/login">Login</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
