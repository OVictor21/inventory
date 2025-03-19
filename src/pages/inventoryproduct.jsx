import Navbar from "../components/navbar";
import React, {  useState } from 'react';

const Inventoryproducts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [productHistory] = useState([]);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('https://your-api-url.com/purchase-history'); 
    //       setPurchaseHistory(response.data);
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
  
    // Search Function
    const handleSearch = () => {
      console.log("Searching for:", searchTerm);
      // Add search logic here (e.g., filter table data)
    };
  
    // Filter Function
    const handleFilter = () => {
      console.log("Filtering...");
      // Add filter logic here
    };
  
    return (
      <div>
        <Navbar />
        <div className='purchase-content text-center text-white'>
          <div className='inventory-text pt-4 fw-bold text-center'>Inventory Products</div>
  
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
                <th>Items</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productHistory.length > 0 ? (
                productHistory.map((item, index) => (
                  <tr key={index}>
                    <td>{item.ModelNumber}</td>
                    <td>${item.cost.toFixed(2)}</td>
                    <td>{new Date(item.orderDate).toLocaleDateString()}</td>
                    <td>{item.Quantity}</td>
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
  
        {/* <footer className="mt-auto text-center py-3 w-100 position-absolute admin-footer text-white ">
              <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
             
            </footer> */}
  
      </div>
    );
  };

export default Inventoryproducts;