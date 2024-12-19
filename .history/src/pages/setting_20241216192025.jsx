import Navbar from "../components/navbar";

const Setting = () => {
  return (
    <div>
    <Navbar/>
    <div className="admin-body min-vh-100 d-flex flex-column justify-content-center align-items-center ">
        <div className="setting justify-content-center rounded-5 mb-4">
          <div className="user-logo position-relative ">
            <img className="d-block w-100 position-absolute profile-logo" src="/user.png" alt="Logo" />
            <a href="/Inventory " className="user-text  position-absolute text-decoration-none text-nowrap">Edit Profile</a>
            <a href="/Inventory " className="user-text  position-absolute text-decoration-none text-nowrap">Security</a>
            <a href="/Inventory " className="user-text  position-absolute text-decoration-none text-nowrap">Notifications</a>
            <a href="/Inventory " className="help-text  position-absolute text-decoration-none text-nowrap">Help & Support</a>
            <a href="/Inventory " className="acc-text  position-absolute text-decoration-none text-nowrap">Add an Account</a>
          </div>
        </div>

        

        
        </div>
    </div>
    
    
  )
}

export default Setting;