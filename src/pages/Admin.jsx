import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <div className="admin-body min-vh-100 d-flex flex-column justify-content-center align-items-center ">
        <div className="inventory justify-content-center rounded-5 mb-4 mt-4">
          <div className="inventory-logo position-relative">
            <img className="d-block w-100 position-absolute admin-logo" src="/inventory.png" alt="Logo" />
            <Link to="/Inventory" className="admin-text position-absolute text-decoration-none" >
              INVENTORY
            </Link>
          </div>
        </div>
        <div className="inventory justify-content-center rounded-5 mb-4">
      <div className="inventory-logo position-relative">
        <img
          className="d-block w-100 position-absolute admin-logo"
          src="/order.png"
          alt="Logo"
        />
        <Link
          to="/Order"
          className="admin-text position-absolute text-decoration-none"
        >
          ORDER
        </Link>
      </div>
    </div>

    <div className="inventory justify-content-center rounded-5 mb-4">
      <div className="inventory-logo position-relative">
        <img
          className="d-block w-100 position-absolute admin-logo"
          src="/notification.png"
          alt="Logo"
        />
        <Link
          to="/Notification"
          className="admin-text position-absolute text-decoration-none"
        >
          NOTIFICATION
        </Link>
      </div>
    </div>

    <div className="inventory justify-content-center rounded-5 mb-4">
      <div className="inventory-logo position-relative">
        <img
          className="d-block w-100 position-absolute admin-logo"
          src="/add-user.png"
          alt="Logo"
        />
        <Link
          to="/Adduser"
          className="admin-text position-absolute text-decoration-none text-nowrap"
        >
          ADD USER
        </Link>
      </div>
    </div>
  </div>

  <footer className="mt-auto text-center py-3 w-100 position-absolute admin-footer text-white ">
    <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
  </footer>
</div>
  );
} 

export default Admin;