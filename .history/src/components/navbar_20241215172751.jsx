const Navbar = () => {
  return (
    <div>
    <div className="navbar nav p-0 " >
           <a href="/" >
            <img
              src="./logo.png" // Replace with your actual logo URL
              alt="Logo"
              className="img-fluid logo"
            />
          </a>
          <div className="navbar-toggler-icon bara mx-5"></div>

         
    </div>
    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4">
          <div className="card shadow p-3" style={{ maxWidth: '500px', width: '100%' }}>
            
            
            <div className="mb-3">
             <a href="/Purchase" className="text-decoration-none text-dark">Purchase history</a>
            </div>
            
            <div className="mb-3">
             <a href="/Purchase" className="text-decoration-none text-dark">Monitor</a>
            </div>

            <div className="mb-3">
             <a href="/Purchase" className="text-decoration-none text-dark">Add a new Item</a>
            </div>

            <div className="mb-3">
             <a href="/Purchase" className="text-decoration-none text-dark">Add an item group</a>
            </div>

            <div className="mb-3">
             <a href="/Purchase" className="text-decoration-none text-dark">Manage group</a>
            </div>

            </div>
    </div>
    </div>
  )
}

export default Navbar;