import Navbar from "../components/navbar";

const Adduser = () => {
  return (
    <div>  <Navbar/>
    <div className="d-flex flex-column min-vh-100">



    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4 admin-body">
      <div className="card shadow p-3" style={{ maxWidth: '500px', width: '100%' }}>
        <h3 className="text-center mb-4 signuptext">Add User</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Phone number
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Password
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>

    
        </form>
      </div>

      {/* Footer */}
      <footer className="text-center py-3 w-100 footers text-white">
        <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
      </footer>


    </div>
  </div>
  </div>
  )
}

export default Adduser;