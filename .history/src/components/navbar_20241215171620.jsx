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
          <span class="navbar-toggler-icon toggle mx-5"></span>
    </div>
  )
}

export default Navbar;