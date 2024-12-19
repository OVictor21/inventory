
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
                        <a className="nav-link nav-text-current" href="#">Home</a>
                    </li>
                    <li className="nav-item m-2">
                        <a className="nav-link nav-text" href="#">Products</a>
                    </li>
                    <li className="nav-item m-2">
                        <a className="nav-link nav-text" href="#">Order</a>
                    </li>
                    <li className="nav-item m-2">
                        <a className="nav-link nav-text" href="#">Notification</a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto justify-content-end">
                    <li className=="nav-item bg-light">
                        <a class="nav-link nav-text-2 text-nowrap" href="#">Log out</a>
                    </li>
                </ul>
            </div>


        </nav>
      );
}
 
export default Navbar;