import Navbar from "../components/navbar"

const Products = () => {
    return (   
    <div>
        <Navbar />
        <div className="admin-body min-vh-100 d-flex flex-column justify-content-center align-items-center ">
          <p className="int-text">PRODUCTS</p>
          <div className="inventory justify-content-center rounded-5 mb-4">
            <div className="inventory-logo position-relative ">
              <img className="d-block w-100 position-absolute admin-logo" src="/plus.png" alt="Logo" />
              <a href="/Productlist " className="admin-text  position-absolute text-decoration-none text-nowrap">View Products</a>
            </div>
          </div>
          
  
          <div className="inventory justify-content-center rounded-5 mb-4">
            <div className="inventory-logo position-relative">
              <img className="d-block w-100 position-absolute admin-logo" src="/plus.png" alt="Logo" />
              <a href="/Addproduct " className="admin-text  position-absolute text-decoration-none text-nowrap">New Product</a>
            </div>
          </div>
  
          <div className="inventory justify-content-center rounded-5 mb-4">
            <div className="inventory-logo position-relative">
              <img className="d-block w-100 position-absolute admin-logo" src="/plus.png" alt="Logo" />
              <a href="/EditProduct " className="admin-text  position-absolute text-decoration-none text-nowrap">Edit Products</a>
            </div>
          </div>
  
    
        </div>
  
        <footer className="mt-auto text-center py-3 w-100 position-absolute admin-footer text-white ">
              <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
             
            </footer>
      </div>
    )
  };

 
export default Products;