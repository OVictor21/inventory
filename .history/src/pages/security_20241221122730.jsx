import Navbar from "../components/navbar";

const Security = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4">
          <div className="card shadow p-3" style={{ maxWidth: '500px', width: '100%' }}>
            <h3 className="text-center mb-4 signuptext">Reset Password</h3>
            <p className="text-center">Enter your password twice </p>
            <form>
             

            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  OLD PASSWORD
                </label>
                <input type="password" className="form-control" id="password" required />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  NEW PASSWORD
                </label>
                <input type="password" className="form-control" id="password" required />
              </div>

              <div className="mb-3">
                <label htmlFor="Confirm password" className="form-label">
                  CONFIRM PASSWORD
                </label>
                <input type="password" className="form-control" id="Confirm password" required />
              </div>

              <div className="d-grid">
              <a href="/Login" className="btn btn-primary">Save Changes</a>
            </div>

            <div className="d-grid mb-x">
              <a href="/Login" className="btn btn-primary">Cancel</a>
            
            </div>
             
  
            </form>
          </div>
  
          <footer className="mt-auto text-center py-3 w-100 position-absolute footers text-white ">
            <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
           
          </footer>
        </div>
    </div>
  )
}

export default Security;