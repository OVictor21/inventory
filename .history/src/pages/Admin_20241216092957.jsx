import Navbar from "../components/navbar";

const Admin = () => {
  return (
    <div>
    <Navbar/>
    <div className="admin-body min-vh-100">
      <div className="inventory justify-content-center rounded-2">
        <div className="inventory-logo align-items-center">
        <img class="block w-100 " src="/inventory.png" alt="Logo"/>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Admin;