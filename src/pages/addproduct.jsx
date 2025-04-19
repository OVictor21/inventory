import Navbar from "../components/navbar";
import React, { useState } from 'react';

const Addproduct = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    modelNumber: "",
    productName: "",
    price: "",
    quantity: ""
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.productName,
      description: "Auto description", 
      alertQty: 2,
      stockQty: parseInt(formData.quantity),
      buyingPrice: parseInt(formData.price),
      sellingPrice: parseInt(formData.price) + 20000, 
      slug: formData.productName.toLowerCase().replace(/\s+/g, "-"),
      sku: formData.modelNumber,
      supplier_name: "LG",
      supplier_contact: "+229448888",
      categoryId: "5ddb046a-95e1-4b8d-aaf3-2f5eac1aebdb", 
    };

    try {
      const response = await fetch("https://sims-mup1.onrender.com/products", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("Product added:", result);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4 admin-body">
        <div className="card shadow p-3" style={{ maxWidth: '500px', width: '100%' }}>
          <h3 className="text-center mb-4 signuptext">Add Product</h3>
          <form onSubmit={handleSave}>
            <div className="mb-3">
              <label htmlFor="modelNumber" className="form-label fw-bold">Model Number</label>
              <input type="text" className="form-control" id="modelNumber" value={formData.modelNumber} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label fw-bold">Product Name</label>
              <input type="text" className="form-control" id="productName" value={formData.productName} onChange={handleInputChange} required />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="dropdown" className="form-label fw-bold">Product Category</label>
                <select className="form-select" id="dropdown" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                  <option value="">Choose...</option>
                  <option value="5ddb046a-95e1-4b8d-aaf3-2f5eac1aebdb">Electronics</option>
                  <option value="another-id">Computers</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="price" className="form-label fw-bold">Price</label>
                <input type="number" className="form-control" id="price" value={formData.price} onChange={handleInputChange} required />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label fw-bold">Quantity</label>
              <input type="number" className="form-control" id="quantity" value={formData.quantity} onChange={handleInputChange} required />
            </div>
            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>

      <footer className="text-center py-3 w-100 footers text-white">
        <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Addproduct;
