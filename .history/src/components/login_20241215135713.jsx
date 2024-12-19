// import logo from '../assets/logo.png'; 

const Login = () => {

  return (
    <div className="login d-flex flex-column min-vh-100">
    <div className="nav-body border flex-grow-1">
        <div className="container d-flex justify-content-center align-items-center py-3">
    <img 
      src="./logo.png" 
      alt="Logo" 
      className="img-fluid logo" 
      style={{ maxWidth: '150px', height: 'auto' }}
    />
  </div>
  
      <form>
        <div className="sign-in position-relative">
          <div className="mb-3">
            <p className="text position-absolute">Sign-in</p>
            <div className="text-wrapper-8 position-absolute">Welcome!</div>
  
            <label htmlFor="exampleInputEmail1" className="form-label email position-absolute">
              <span className="email-text">Email Address</span>
            </label>
            <input type="email" className="form-control email-in position-absolute" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label pass position-absolute">
              <span className="pass-text">Password</span>
            </label>
            <input type="password" className="form-control pass-in position-absolute" id="exampleInputPassword1" />
            <a href="/forgotpassword" className="text-wrapper-7 position-absolute">Forget Password?</a>
          </div>
  
          <button type="submit" className="btn sign-btn position-absolute rounded-3 text-white fw-bold">Sign In</button>
          <div className="d-flex flex-column align-items-center mt-4">
           <p className="acct mb-1">Don't have an account?</p>
          <a href="/createacct" className="acct-1">Create an account</a>
</div>


        </div>
      </form>
    </div>
  
    <footer className="footer-body text-white p-3">
      <div className="container">
        <div className="text-center">
          <p>&copy; 2024 BestworthJvp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
  
  );
};

export default Login;
