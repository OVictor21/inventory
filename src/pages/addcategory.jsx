import React, { useState, useCallback } from "react";
import Navbar from "../components/navbar";

const Addcategory = () => {
  const [formData, setFormData] = useState({
    modelNumber: "",
    productName: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }, []);

  const handleSave = useCallback((e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a save operation
    setTimeout(() => {
      console.log("Category Created:", formData);
      setIsSubmitting(false);
      setFormData({
        modelNumber: "",
        productName: "",
      });
    }, 1000);
  }, [formData]);

  return (
    <div className="d-flex flex-column min-vh-100">
     <Navbar />
     <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4 admin-body">
        <div className="card shadow p-3" style={{ maxWidth: '500px', width: '100%' }}>
          <h3 className="text-center mb-4 signuptext">Add Category</h3>

      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label htmlFor="modelNumber" className="form-label fw-bold">Name</label>
          <input
            type="text"
            className="form-control"
            id="modelNumber"
            value={formData.modelNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productName" className="form-label fw-bold">Slug</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={formData.productName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="d-grid mt-3">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Category"}
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

export default Addcategory;
