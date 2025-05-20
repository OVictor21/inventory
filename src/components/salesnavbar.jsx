import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Salesnavbar = () => {
  const navigate = useNavigate();
  const { logout, isLoggedIn } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-md justify-content-center p-3 z-1">
      {/* Logo/Brand */}
      <a className="navbar-brand d-flex me-auto" href="/">
        <img className="w-100" src="/logo.png" alt="Company Logo" width="100" />
      </a>

      {/* Mobile Toggle Button */}
      <button
        className="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Content */}
      <div className="navbar-collapse collapse" id="navbarContent">
        {/* Main Navigation */}
        <ul className="navbar-nav justify-content-center w-100">
          <NavItem href="/Admin" text="Home" />
          <NavItem href="/Salesproduct" text="Product" />
          <NavItem href="/Order" text="Order" />

          
          {/* Settings Dropdown */}
          <li className="nav-item m-2">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle nav-link nav-text"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Settings
              </button>
              <ul className="dropdown-menu drop bg-body-secondary">
                <DropdownItem href="/saleseditprofile" text="Edit Profile" />
                <DropdownItem href="/salessecurity" text="Security" />
              </ul>
            </div>
          </li>
        </ul>

        {/* Login/Logout Button */}
        <ul className="navbar-nav ms-auto justify-content-end mx-5">
          {isLoggedIn ? (
            <li className="nav-item logout p-2 rounded-2 text-nowrap">
              <button 
                className="btn btn-danger" 
                onClick={handleLogout}
                aria-label="Logout"
              >
                Log out
              </button>
            </li>
          ) : (
            <li className="nav-item p-2">
              <a className="nav-link nav-text-2" href="/login">
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};


const NavItem = ({ href, text }) => (

  <li className="nav-item m-2"> <Link className="nav-link nav-text" to={href}> {text} </Link> </li> );
  const DropdownItem = ({ href, text }) => (
  
  <li> <Link className="dropdown-item" to={href}> {text} </Link> </li> );

export default Salesnavbar;