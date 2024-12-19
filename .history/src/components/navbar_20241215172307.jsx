const Navbar = () => {
  return (
    <div className="navbar nav p-0 " >
           <a href="/" >
            <img
              src="./logo.png" // Replace with your actual logo URL
              alt="Logo"
              className="img-fluid logo"
            />
          </a>
          <div className="navbar-toggler-icon bara mx-5"></div>

          <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4">
          <div className="card shadow p-3" style={{ maxWidth: '500px', width: '100%' }}>
            
            
                <div className="mb-3">
              <label htmlFor="name" className="form-label">
                First Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            </div>
    </div>
    </div>
  )
}

export default Navbar;