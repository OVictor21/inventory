
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md justify-content-center p-5 z-1">

             <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="collapseNavbar">
        
                <ul className="navbar-nav justify-content-center w-100">
                <li className="nav-item m-2">
        <a className="nav-link nav-text-current" href="/home">Home</a>
      </li>
      <li className="nav-item m-2">
        <a className="nav-link nav-text" href="/products">Products</a>
      </li>
      <li className="nav-item m-2">
        <a className="nav-link nav-text" href="/order">Order</a>
      </li>
      <li className="nav-item m-2">
        <a className="nav-link nav-text" href="/notifications">Notification</a>
      </li>
                </ul>
                <ul className="navbar-nav ms-auto justify-content-end">
                    <li className="nav-item bg-light">
                        <a className="nav-link nav-text-2 text-nowrap" href="#">Log out</a>
                    </li>
                </ul>
            </div>

            <nav className="navbar navbar-expand-md justify-content-center p-5 z-1">
  <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="navbar-collapse collapse" id="collapseNavbar">
    <ul className="navbar-nav justify-content-center w-100">
      <li className="nav-item m-2">
        <a className="nav-link nav-text-current" href="/home">Home</a>
      </li>
      <li className="nav-item m-2">
        <a className="nav-link nav-text" href="/products">Products</a>
      </li>
      <li className="nav-item m-2">
        <a className="nav-link nav-text" href="/order">Order</a>
      </li>
      <li className="nav-item m-2">
        <a className="nav-link nav-text" href="/notifications">Notification</a>
      </li>
    </ul>

    <ul className="navbar-nav ms-auto justify-content-end">
      <li className="nav-item bg-light">
        <button className="nav-link nav-text-2 text-nowrap btn btn-link" onClick={handleLogout}>Log out</button>
      </li>
    </ul>
  </div>
</nav>



        </nav>
      );
}
 
export default Navbar;