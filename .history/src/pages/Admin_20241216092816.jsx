import Navbar from "../components/navbar";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <div className="admin-body min-vh-100 d-flex justify-content-center align-items-center">
        <div className="inventory justify-content-center rounded-2">
          <div className="inventory-logo">
            <img className="d-block w-100" src="/inventory.png" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
