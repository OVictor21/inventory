import Navbar from "../components/navbar";

const Setting = () => {
  return (
    <Navbar/>
    <div className="admin-body min-vh-100 d-flex flex-column justify-content-center align-items-center ">
        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo position-relative "/>
            <img className="d-block w-100 position-absolute admin-logo" src="/inventory.png" alt="Logo" />
            <a href="/Inventory " className="admin-text  position-absolute text-decoration-none">INVENTORY</a>
          </div>
        </div>
        </div>
  )
}

export default Setting;