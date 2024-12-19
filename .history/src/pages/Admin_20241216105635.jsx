import Navbar from "../components/navbar";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <div className="admin-body min-vh-100 d-flex flex-column justify-content-center align-items-center ">
        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo position-relative ">
            <img className="d-block w-100 mx-5 mt-3" src="/inventory.png" alt="Logo" />
            <p className="admin-text position-absolute">Inventory</p>
          </div>
        </div>

        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo position-relative">
            <img className="d-block w-100 mx-5 mt-3" src="/order.png" alt="Logo" />
            <p className="admin-text  position-absolute">order</p>
          </div>
        </div>

        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo position-relative">
            <img className="d-block w-100 mx-5 mt-3" src="/notification.png" alt="Logo" />
            <p className="admin-text  position-absolute">Notification</p>
          </div>
        </div>

        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo">
            <img className="d-block w-100 mx-5 mt-3" src="/add-user.png" alt="Logo" />
            <p className="admin-text  position-absolute">Add or Remove App</p>
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
