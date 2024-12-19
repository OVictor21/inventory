

const Login = () => {

  return (
    <div className="login d-flex flex-column min-vh-100">

    <div className=" nav-body border p-4 flex-grow-1 d-flex justify-content-center align-items-center"></div>


         <form >
        <div className="sign-in position-relative ">
        <div className="mb-3">
            <p className="text position-absolute">Sign-in</p>
            <div className="text-wrapper-8 position-absolute">Welcome!</div>
          
          <label for="exampleInputEmail1" className="form-label email position-absolute"><span className="email-text"> Email Address</span></label>
          <input type="email" className="form-control email-in position-absolute" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label pass position-absolute"><span className="pass-text">Password</span> </label>
          <input type="password" className="form-control pass-in position-absolute" id="exampleInputPassword1"/>
          <a href="/forgotpassword" className="text-wrapper-7 position-absolute">Forget Password?</a>
        </div>

 
        <button type="submit" className="btn sign-btn position-absolute rounded-3 text-white fw-bold">Sign In</button>
        <p  className="acct position-absolute">Don't have an account?</p> <a href="/createacct" className="acct-1 position-absolute">Create an account</a>

      
        </div>
    </form>
  
    <footer className="footer-body text-white p-3">
  <div className="container">
    <div className="row text-center align-items-center">
      <div className="col-12 col-md-6 mb-2 mb-md-0">
        <p className="mb-0">&copy; 2024 BestworthJvp. All rights reserved.</p>
      </div>
      <div className="col-12 col-md-6">
        <ul className="footer-links list-unstyled d-flex justify-content-center justify-content-md-end mb-0">
          <li className="mx-2"><a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
          <li className="mx-2"><a href="/terms" className="text-white text-decoration-none">Terms of Service</a></li>
          <li className="mx-2"><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Login;
