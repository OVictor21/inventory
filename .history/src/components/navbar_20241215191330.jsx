const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md justify-content-center p-3 z-1">

    <a className="navbar-brand d-flex me-auto" href="#">
        <img class="block w-100" src="/logo.png" alt="Logo"/>
    </a>
    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapseNavbar">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="collapseNavbar">
  
        <ul className="navbar-nav justify-content-center w-100">
            <li class="nav-item m-2">
                <a className="nav-link nav-text" href="/index.html">Home</a>
            </li>
            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/product/index.html">Products</a>
            </li>
            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/Services/index.html">Services</a>
            </li>
            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/Portfolio/index.html">Portfolio</a>
            </li>
            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/blog/index.html">Blog</a>
            </li>
            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/About us/index.html">About Us</a>
            </li>
            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/contact-us/index.html">Contact Us</a>
            </li>
        </ul>

        <img className="img-fluid user position-absolute" src="img/group-4.png"/>

    </div>
</nav>
  )
}

export default Navbar;