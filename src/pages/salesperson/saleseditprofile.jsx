import Salesnavbar from "../../components/salesnavbar";


const Saleseditprofile = () => {
  return (
   <div> 
     <Salesnavbar/>
    <div className="d-flex">


    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4">
      <div className="card shadow p-3  " style={{ maxWidth: '500px', width: '100%' }}>
        <h3 className="text-center mb-4 signuptext">Edit Profile</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Phone number
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="username" className="form-control" id="username" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>

    
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-auto text-center py-3 w-100 position-absolute footers text-white ">
        <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
      </footer>
    </div>
  </div>
  </div>
  )
}

export default Saleseditprofile;