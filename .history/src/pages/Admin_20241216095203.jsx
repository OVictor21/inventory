import Navbar from "../components/navbar";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <div className="admin-body min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo">
            <img className="d-block w-100 mx-5 mt-3" src="/inventory.png" alt="Logo" />
          </div>
        </div>

        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo">
            <img className="d-block w-100 mx-5 mt-3" src="/order.png" alt="Logo" />
            <p className="admin-text justify-content-center">order</p>
          </div>
        </div>

        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo">
            <img className="d-block w-100 mx-5 mt-3" src="/notification.png" alt="Logo" />
          </div>
        </div>

        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo">
            <img className="d-block w-100 mx-5 mt-3" src="/add-user.png" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
