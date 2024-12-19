import Navbar from "../components/navbar";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <div className="admin-body min-vh-100 d-flex flex-column justify-content-center align-items-center ">
        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo position-relative ">
            <img className="d-block w-100 position-absolute" src="/inventory.png" alt="Logo" />
            <a href="/Inventory " className="admin-text  position-absolute text-decoration-none">INVENTORY</a>
          </div>
        </div>

        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo position-relative">
            <img className="d-block w-100 position-absolute" src="/order.png" alt="Logo" />
            <a href="/Order " className="admin-text  position-absolute text-decoration-none">ORDER</a>
          </div>
        </div>

        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo position-relative">
            <img className="d-block w-100 position-absolute" src="/notification.png" alt="Logo" />
            <a href="/Notification " className="admin-text  position-absolute text-decoration-none">NOTIFICATION</a>
          </div>
        </div>

        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo position-relative">
            <img className="d-block w-100 mx-5 pt-5" src="/add-user.png" alt="Logo" />
            <a href="/Adduser " className="admin-text  position-absolute text-decoration-none">ADDUSER</a>
          </div>
        </div>
      </div>

      <footer className="mt-auto text-center py-3 w-100 position-absolute admin-footer text-white ">
            <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
           
          </footer>
    </div>
  );
};

export default Admin;
