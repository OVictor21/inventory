import Navbar from "../components/navbar";

const Addremove = () => {
  return (
    <div>
      <Navbar />
      <div className="admin-body min-vh-100 d-flex flex-column justify-content-center align-items-center ">
        <p className="text-center setting-text text-white">ADD/REMOVE USER</p>
        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo position-relative ">
            <img className="d-block w-100 position-absolute admin-logo" src="/add-user.png" alt="Logo" />
            <a href="/Adduser" className="admin-text  position-absolute text-decoration-none text-nowrap">Add User</a>
          </div>
        </div>
        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo position-relative">
            <img className="d-block w-100 position-absolute admin-logo" src="/remove.png" alt="Logo" />
            <a href="/Removeuser " className="admin-text  position-absolute text-decoration-none text-nowrap">Remove user</a>
          </div>
        </div>
      </div>
      <footer className="mt-auto text-center py-3 w-100 position-absolute admin-footer text-white ">
        <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Addremove;