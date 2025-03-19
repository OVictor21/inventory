import Navbar from "../components/navbar";
import { useState } from "react";

const Editproduct = () => {
   
    const [selectedOption, setSelectedOption] = useState("");

    return (
      <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4 admin-body">
        <div className="card shadow p-3" style={{ maxWidth: '500px', width: '100%' }}>
          <h3 className="text-center mb-4 signuptext">Edit Product</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                 Model Number
              </label>
              <input type="text" className="form-control" id="name" required/>
            </div>

            <div className="mb-3">
              <label htmlFor="amount" className="form-label fw-bold">
                Product Name 
              </label>
              <input type="text" className="form-control" id="amount" required />
            </div>

            <div className="row mb-3">
 
             <div className="col-md-6">
              <label htmlFor="dropdown" className="form-label fw-bold">Product Category</label>
              <select className="form-select" id="dropdown" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
              <option value="">Choose...</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              </select>
              </div>

              <div className="col-md-6">
              <label htmlFor="price" className="form-label fw-bold">Price</label>
              <input type="number" className="form-control" id="price" required />
              </div>
         </div>

<div className="mb-3">
 <label htmlFor="Quantity" className="form-label fw-bold">
  Quantity
 </label>
 <input type="Quantity" className="form-control" id="Quantity" required />
</div>

            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="text-center py-3 w-100 footers text-white">
        <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
      </footer>
    </div>
    )
}
 
export default Editproduct;