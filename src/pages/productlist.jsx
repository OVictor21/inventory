import Navbar from "../components/navbar";
import React, { useState, useEffect } from 'react';
import axiosInstance from "../utils/axiosInstance";

const Productlist = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [productHistory, setProductHistory] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products");
                
        const products = response.data.data;
  
        if (Array.isArray(products)) {
          setProductHistory(products);
        } else {
          console.error("Invalid data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, []);
  
  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const handleFilter = () => {
    console.log("Filtering...");
  };

  return (
    <div>
      <Navbar />
      <div className='purchase-content text-center text-white'>
        <div className='inventory-text pt-4 fw-bold text-center'>Products</div>

        <div className="mt-3 d-flex justify-content-center">
          <div className="search-wrapper">
            <input
              type="text"
              className="search rounded form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button className="search-btn" onClick={handleSearch}>
              <img src="/search.png" alt="search icon" className="search-icon" />
            </button>
            <button className="filter-btn" onClick={handleFilter}>
              <img src="/filter.png" alt="filter icon" className="filter-icon" />
            </button>
          </div>
        </div>
        <button className="add-btn fw-bold mt-4">Add a product</button>
        <button className="report-btn fw-bold mt-4">Download Report</button>
      </div>

      <div className="table-responsive mt-3">
        <table className="table table-white table-hover text-center">
          <thead>
            <tr>
              <th>Model Number</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Slug</th>
              <th>Supplier</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productHistory.length > 0 ? (
              productHistory.map((item, index) => (
                <tr key={index}>
                  <td>{item.sku || "N/A"}</td>
                  <td>{item.name || "N/A"}</td>
                  <td>{item.stockQty || "0"}</td>
                  <td>{item.buyingPrice || "0"}</td>
                  <td>{item.slug || "N/A"}</td>
                  <td>{item.supplier_name || "N/A"}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary">Edit</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">No Products found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Productlist;
