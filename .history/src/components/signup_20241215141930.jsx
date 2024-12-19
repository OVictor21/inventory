const SignUp = () => {
    return (
      <div className="signup d-flex flex-column min-vh-100">
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
            <div className="sign-up position-relative">
              <div className="mb-3">
                <p className="text position-absolute">Sign-up</p>
                <div className="text-wrapper-8 position-absolute">Join Us!</div>
  
                <label htmlFor="nameInput" className="form-label name position-absolute">
                  <span className="name-text">Full Name</span>
                </label>
                <input type="text" className="form-control name-in position-absolute" id="nameInput" />
  
                <label htmlFor="emailInput" className="form-label email position-absolute">
                  <span className="email-text">Email Address</span>
                </label>
                <input type="email" className="form-control email-in position-absolute" id="emailInput" />
              </div>
  
              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label pass position-absolute">
                  <span className="pass-text">Password</span>
                </label>
                <input type="password" className="form-control password-in position-absolute" id="passwordInput" />
  
                <label htmlFor="confirmPasswordInput" className="form-label confirm-pass position-absolute">
                  <span className="confirm-pass-text">Confirm Password</span>
                </label>
                <input type="password" className="form-control confirm-pass-in position-absolute" id="confirmPasswordInput" />
              </div>
  
              <button type="submit" className="btn signup-btn position-absolute rounded-3 text-white fw-bold">
                Sign Up
              </button>
  
              <div className="acc position-relative">
                <p className="accts position-absolute">Already have an account?</p>
                <a href="/login" className="accts-1 position-absolute">Sign In</a>
              </div>
            </div>
          </form>
        </div>
  
        <footer className="footer-bodyy text-white p-3">
          <div className="container">
            <div className="text-center">
              <p>&copy; 2024 BestworthJvp. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default SignUp;
  