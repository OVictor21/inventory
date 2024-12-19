
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
                    <li class="nav-item m-2">
                        <a class="nav-link nav-text" href="#">Order</a>
                    </li>
                    <li class="nav-item m-2">
                        <a class="nav-link nav-text" href="#">Portfolio</a>
                    </li>
                    <li class="nav-item m-2">
                        <a class="nav-link nav-text" href="#">Blog</a>
                    </li>
                    <li class="nav-item m-2">
                        <a class="nav-link nav-text" href="#">About Us</a>
                    </li>
                    <li class="nav-item m-2">
                        <a class="nav-link nav-text" href="#">Contact Us</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto justify-content-end">
                    <li class="nav-item bg-light">
                        <a class="nav-link nav-text-2 text-nowrap" href="#">Log in/Sign up</a>
                    </li>
                </ul>
            </div>


        </nav>
      );
}
 
export default Navbar;