import Navbar from "../components/navbar";

const Order = () => {
  return (
    <div>
      <Navbar />
      <div className="admin-body min-vh-100 d-flex flex-column justify-content-center align-items-center ">
        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo position-relative ">
            <img className="d-block w-100 position-absolute admin-logo" src="/inventory.png" alt="Logo" />
            <a href="/Inventory " className="admin-text  position-absolute text-decoration-none text-nowrap">Place Order</a>
          </div>
        </div>
        

        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo position-relative">
            <img className="d-block w-100 position-absolute admin-logo" src="/order-history.png" alt="Logo" />
            <a href="/Order " className="admin-text  position-absolute text-decoration-none text-nowrap">Order History</a>
          </div>
        </div>

        <div className="inventory justify-content-center rounded-5 mb-4">
          <div className="inventory-logo position-relative">
            <img className="d-block w-100 position-absolute admin-logo" src="/notification.png" alt="Logo" />
            <a href="/Notification " className="admin-text  position-absolute text-decoration-none text-nowrap">Transaction History</a>
          </div>
        </div>


      </div>

      <footer className="mt-auto text-center py-3 w-100 position-absolute admin-footer text-white ">
            <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
           
          </footer>
    </div>
  )
}

export default Order;