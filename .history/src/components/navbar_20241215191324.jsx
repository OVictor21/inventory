const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md justify-content-center p-5 z-1">
            <!-- Logo -->
            <a class="navbar-brand d-flex me-auto" href="#">
                <img class="block w-100" src="./img/logo.png" alt="Logo">
            </a>
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="collapseNavbar">
                <!-- Links -->
                <ul class="navbar-nav justify-content-center w-100">
                    <li class="nav-item m-2">
                        <a class="nav-link nav-text-current" href="#">Home</a>
                    </li>
                    <li class="nav-item m-2">
                        <a class="nav-link nav-text" href="/product/index.html">Products</a>
                    </li>
                    <li class="nav-item m-2">
                        <a class="nav-link nav-text" href="/Services/index.html">Services</a>
                    </li>
                    <li class="nav-item m-2">
                        <a class="nav-link nav-text" href="/Portfolio/index.html">Portfolio</a>
                    </li>
                    <li class="nav-item m-2">
                        <a class="nav-link nav-text" href="/blog/index.html">Blog</a>
                    </li>
                    <li class="nav-item m-2">
                        <a class="nav-link nav-text" href="/About us/index.html">About Us</a>
                    </li>
                    <li class="nav-item m-2">
                        <a class="nav-link nav-text" href="/contact-us/index.html">Contact Us</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto justify-content-end">
                    <li class="nav-item bg-light">
                        <a class="nav-link nav-text-2 text-nowrap" href="/Sign in/index.html">Sign In</a>
                    </li>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar;