import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md justify-content-center p-3 z-1">

    <a className="navbar-brand d-flex me-auto" href="#">
        <img class="block w-100" src="/logo.png" alt="Logo"/>
    </a>
   <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
    <div className="navbar-collapse collapse" id="collapseNavbar">
  
        <ul className="navbar-nav justify-content-center w-100">
            <li class="nav-item m-2 ">
                <a className="nav-link nav-text" href="/index.html">Home</a>
            </li>
           
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a className="dropdown-item" href="/services/web-development">
                  Web Development
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/services/ui-ux">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/services/seo">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </li>
          </

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

        <ul className="navbar-nav ms-auto justify-content-end">
                    <li className="nav-item bg-light">
                        <a className="nav-link nav-text-2 text-nowrap" href="/Sign in/index.html">Logout</a>
                    </li>
                </ul>
    </div>
</nav>
  )
}

export default Navbar;


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
