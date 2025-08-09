import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md justify-content-center p-1 z-1 shadow">

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
                <a className="nav-link nav-text" href="/About-us">About Us</a>
            </li>
           
            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/Resources">Resources</a>
            </li>

            <li className="nav-item m-2">
                <a className="nav-link nav-text" href="/Contact">Contact Us</a>
            </li>

        </ul>

         <div className="signup-btn justify-content-end mx-2 rounded mt-3 mt-md-0">            
  <a className="signup-text text-nowrap" href="/Login/index.html">Sign up</a>
</div>

<div className="signin-btn justify-content-end mx-2 rounded mt-3 mt-md-0">
  <a className="sign-text text-nowrap" href="/Signup/index.html">Sign in</a>
</div>


      
    </div>
</nav>
  )
}

export default Navbar;


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
