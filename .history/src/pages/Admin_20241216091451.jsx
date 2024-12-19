import Navbar from "../components/navbar";

const Admin = () => {
  return (
    <div>
    <Navbar/>
    <div className="admin-body min-vh-100">
      <div className="inventory justify-align-content-center rounded-2">
      <div className="side text-white d-flex flex-column align-items-center p-3 vh-100" style={{ width: '300px' }}>
          <a href="/" className="d-block mb-4">
            <img
              src="./logo.png" // Replace with your actual logo URL
              alt="Logo"
              className="img-fluid"
            />
          </a>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Admin;