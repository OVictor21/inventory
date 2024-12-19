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
           
            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/Services/index.html">Inventory</a>
            </li>
            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/Portfolio/index.html">Order</a>
            </li>
            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/blog/index.html">Notifications</a>
            </li>
            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/About us/index.html">Settings</a>
            </li>

        </ul>

        <ul className="navbar-nav ms-auto justify-content-end mx-5">
                    <li className="nav-item logout p-2 rounded-2">
                        <a className="nav-link nav-text-2 text-nowrap" href="/Sign in/index.html">Log out</a>
                    </li>
                </ul>
    </div>
</nav>
  )
}

export default Navbar;


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
