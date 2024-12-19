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
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" required />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
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
  