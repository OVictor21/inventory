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
            
            <img className="d-block w-100 position-absolute security-logo" src="/security.png" alt="Logo" />
            <a href="/Inventory " className="security-text  position-absolute text-decoration-none text-nowrap">Security</a>
            
            <img className="d-block w-100 position-absolute notify-logo" src="/notification.png" alt="Logo" />
            <a href="/Inventory " className="notify-text  position-absolute text-decoration-none text-nowrap">Notifications</a>
            
            <img className="d-block w-100 position-absolute help-logo" src="/help.png" alt="Logo" />
            <a href="/Inventory " className="help-text  position-absolute text-decoration-none text-nowrap">Help & Support</a>
           
            <img className="d-block w-100 position-absolute acc-logo" src="/add-user.png" alt="Logo" />
            <a href="/Addacc " className="acc-text  position-absolute text-decoration-none text-nowrap">Add an Account</a>

            <bu
          </div>
        </div>

        

        
        </div>
    </div>
    
    
  )
}

export default Setting;