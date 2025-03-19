
import React, {  useState } from 'react';
// import axios from 'axios';
import Navbar from '../components/navbar';

const Transaction = () => {
        const [searchTerm, setSearchTerm] = useState('');
        const [purchaseHistory] = useState([]);
      
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
              <div className='inventory-text pt-4 fw-bold text-center'>Transaction History</div>
      
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
            </div>
      
            <div className="table-responsive mt-3">
              <table className="table table-white table-hover">
                <thead>
                  <tr>
                    <th>Item Description</th>
                    <th>Cost</th>
                    <th>Order Date</th>
                    <th>Status</th>
                    <th>Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {purchaseHistory.length > 0 ? (
                    purchaseHistory.map((item, index) => (
                      <tr key={index}>
                        <td>{item.itemDescription}</td>
                        <td>${item.cost.toFixed(2)}</td>
                        <td>{new Date(item.orderDate).toLocaleDateString()}</td>
                        <td>
                          <span className={`badge ${item.status === 'Completed' ? 'bg-success' : 'bg-warning'}`}>
                            {item.status}
                          </span>
                        </td>
                        <td>{item.qty}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">No purchase history found</td>
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
}
 
export default Transaction;