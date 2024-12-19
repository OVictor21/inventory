const   Reset1 = () => {
    return (
      <div className="d-flex">
        {/* Sidebar with Logo */}
        <div className="side text-white d-flex flex-column align-items-center p-3 vh-100" style={{ width: '200px' }}>
          <a href="/" className="d-block mb-4">
            <img
              src="./logo.png" // Replace with your actual logo URL
              alt="Logo"
              className="img-fluid"
            />
          </a>
        </div>
  
        {/* Main Content Area with Sign-Up Form */}
        <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4">
          <div className="card shadow p-3" style={{ maxWidth: '500px', width: '100%' }}>
            <h3 className="text-center mb-4 signuptext">Reset Password</h3>
            <p className="text-center">Enter your email address to reset your password</p>
            <form>
    
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input type="email" className="form-control" id="email" required />
              </div>

              <div className="d-grid">
              <button type="submit" className="btn btn-primary"><a href="/"></a>
                Send
              </button>
            </div>
             
  
              <div className="text-center mt-3 ">
      <p>Already have an account?{' '}<a href="/login" className="text-decoration-none">Sign In</a></p>
    </div>
  
            </form>
          </div>
  
          {/* Footer */}
          <footer className="mt-auto text-center py-3 w-100 position-absolute footers text-white ">
            <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
           
          </footer>
        </div>
      </div>
    );
  };
  
  export default Reset1;
  