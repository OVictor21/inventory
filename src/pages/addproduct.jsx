import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import axiosInstance from "../utils/axiosInstance";
import { useAuth } from "../context/AuthContext";

const Addproduct = () => {
  const { logout } = useAuth();
  const [selectedOption, setSelectedOption] = useState("");
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    modelNumber: "",
    productName: "",
    price: "",
    quantity: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/categories");
        setCategories(response.data.data || []);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        setError("Failed to load product categories");
      }
    };
    
    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (!selectedOption) {
      setError("Please select a product category");
      setIsSubmitting(false);
      return;
    }

    const quantity = parseInt(formData.quantity);
    const price = parseInt(formData.price);
    
    const payload = {
      name: formData.productName.trim(),
      description: "Auto description",
      alertQty: 2,
      stockQty: isNaN(quantity) ? 0 : quantity,
      buyingPrice: isNaN(price) ? 0 : price,
      sellingPrice: isNaN(price) ? 0 : price + 20000,
      slug: formData.productName.trim().toLowerCase().replace(/\s+/g, "-"),
      sku: formData.modelNumber.trim() || "unknown-sku",
      supplier_name: "LG",
      supplier_contact: "+229448888",
      categoryId: selectedOption,
    };
    
    try {
      const response = await axiosInstance.post("/products", payload);
      console.log("Product added:", response.data);
      alert("✅ Product added successfully!");

      setFormData({ modelNumber: "", productName: "", price: "", quantity: "" });
      setSelectedOption("");
    } catch (error) {
      console.error("Error adding product:", error);
      
      let errorMessage = "Failed to add product";
      if (error.response?.data?.error) {
        if (error.response.data.error.includes("Foreign key constraint")) {
          errorMessage = "Invalid product category selected";
        } else {
          errorMessage = error.response.data.error;
        }
      } else if (error.response?.status === 401) {
        logout();
        return;
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4 admin-body">
        <div className="card shadow p-3" style={{ maxWidth: '500px', width: '100%' }}>
          <h3 className="text-center mb-4 signuptext">Add Product</h3>
          
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSave}>
            <div className="mb-3">
              <label htmlFor="modelNumber" className="form-label fw-bold">Model Number</label>
              <input type="text" className="form-control" id="modelNumber" 
                value={formData.modelNumber} onChange={handleInputChange} required />
            </div>
            
            <div className="mb-3">
              <label htmlFor="productName" className="form-label fw-bold">Product Name</label>
              <input type="text" className="form-control" id="productName" 
                value={formData.productName} onChange={handleInputChange} required />
            </div>
            
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="dropdown" className="form-label fw-bold">Product Category</label>
                <select
                  className="form-select"
                  id="dropdown"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  required
                >
                  <option value="">Choose...</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="col-md-6">
                <label htmlFor="price" className="form-label fw-bold">Price</label>
                <input type="number" className="form-control" id="price" 
                  value={formData.price} onChange={handleInputChange} required />
              </div>
            </div>
            
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label fw-bold">Quantity</label>
              <input type="number" className="form-control" id="quantity" 
                value={formData.quantity} onChange={handleInputChange} required />
            </div>
            
            <div className="d-grid mt-3">
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
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