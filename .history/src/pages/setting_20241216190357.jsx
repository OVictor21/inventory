import Navbar from "../components/navbar";

const Setting = () => {
  return (
    <div>
    <Navbar/>
    <div className="admin-body min-vh-100 d-flex flex-column justify-content-center align-items-center ">
        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="user-logo position-relative ">
            <img className="d-block w-100 position-absolute profile-logo" src="/user.png" alt="Logo" />
            <a href="/Inventory " className="admin-text  position-absolute text-decoration-none">Edit Profile</a>
          </div>
        </div>
        </div>
    </div>
    
    
  )
}

export default Setting;