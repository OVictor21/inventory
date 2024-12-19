import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md justify-content-center p-3 z-1">

    <a className="navbar-brand d-flex me-auto" href="all">
        <img class="block w-100" src="/logo.png" alt="Logo"/>
    </a>
   <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
    <div className="navbar-collapse collapse" id="collapseNavbar">
  
        <ul className="navbar-nav justify-content-center w-100">
            <li class="nav-item m-2 ">
                <a className="nav-link nav-text" href="/Admin">Home</a>
            </li>
           
            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/Inventory">Inventory</a>
            </li>

            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/Product">Product</a>
            </li>
            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/Order">Order</a>
            </li>
            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/Notifications">Notifications</a>
            </li>
            <div class="btn-group">
  <button type="button" class="btn btn-danger">Setting</button>
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/ac">Edit Profile</a></li>
    <li><a class="dropdown-item" href="/as">Sec</a></li>
    <li><a class="dropdown-item" href="/so">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="se">Separated link</a></li>
  </ul>
</div>


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
