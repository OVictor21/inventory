import Navbar from "../components/navbar";

const Admin = () => {
  return (
    <div>
    <Navbar/>
    <div className="admin-body min-vh-100">
      <div className="inventory justify-content-center rounded-2">
        <div className="inventory-logo ">
        <img class="block w-100 align" src="/inventory.png" alt="Logo"/>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Admin;