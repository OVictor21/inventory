
import { useState } from "react";
import Salesnavbar from "../../components/salesnavbar";

const Salesplaceorder = () => {
  const [inventory, setInventory] = useState({
    "Product 1": 10,
    "Product 2": 15,
    "Product 3": 8,
  });

  const productOptions = [
    { name: "Product 1", price: 5000 },
    { name: "Product 2", price: 3000 },
    { name: "Product 3", price: 7000 },
  ];

  const paymentMethods = ["Cash", "Transfer", "POS"];
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState({ method: "Cash" });
  const [salesRepName] = useState("John Doe");
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptDetails,setReceiptDetails]= useState();

  const handleProductSelect = (product) => {
    if (inventory[product.name] > 0) {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    } else {
      alert("Out of stock!");
    }
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedProducts = [...selectedProducts];
    const newQuantity = parseInt(quantity);
    
    if (newQuantity > inventory[updatedProducts[index].name]) {
      alert("Not enough stock available!");
      return;
    }
    
    updatedProducts[index].quantity = newQuantity;
    setSelectedProducts(updatedProducts);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = selectedProducts.filter((_, i) => i !== index);
    setSelectedProducts(updatedProducts);
  };

  const handlePaymentChange = (e) => {
    setSelectedPayment({ method: e.target.value });
  };

  const totalAmount = selectedProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const handleCompleteOrder = () => {
    if (selectedProducts.length === 0) {
      alert("Please add at least one product to complete the order.");
      return;
    }
  
    const updatedInventory = { ...inventory };
    selectedProducts.forEach((product) => {
      updatedInventory[product.name] -= product.quantity;
    });
  
    setInventory(updatedInventory);
  
    // Generate a unique receipt number (Timestamp + Random 3-digit number)
    const uniqueReceiptNo = `RCPT-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`;
  
    // Store receipt details
    setReceiptDetails({
      companyName: "Bestwort JVP Company",
      address: "Odun Ade, Lagos",
      phone: "08035068506, 08035078379",
      receiptNo: uniqueReceiptNo,
      timestamp: new Date().toLocaleString(),
      products: [...selectedProducts],
      totalAmount,
      paymentMethod: selectedPayment.method,
    });
  
    setSelectedProducts([]); // Clear selected products after purchase
    setShowReceipt(true);
  };
  
  

  return (
    <div className="d-flex flex-column min-vh-100">
      <Salesnavbar />
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4 admin-body">
        <div className="card shadow p-3" style={{ maxWidth: "500px", width: "100%" }}>
          <h3 className="text-center signuptext mb-4">Create New Order</h3>
          
          <div className="mb-3">
            <label className="form-label">Sales Rep Name</label>
            <h5>{salesRepName}</h5>
          </div>

          <div className="mb-3">
            <label className="form-label">Select Product</label>
            <div className="dropdown w-100">
              <button className="btn w-100 dropdown-toggle border" type="button" data-bs-toggle="dropdown">
                Choose a product
              </button>
              <ul className="dropdown-menu w-100">
                {productOptions.map((product, index) => (
                  <li key={index}>
                    <button
                      className="dropdown-item"
                      onClick={() => handleProductSelect(product)}
                    >
                      {product.name} - ₦{product.price} (Stock: {inventory[product.name]})
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {selectedProducts.length > 0 && (
            <div className="mb-3">
              <h5>Selected Products</h5>
              {selectedProducts.map((product, index) => (
                <div key={index} className="d-flex justify-content-between mb-2 align-items-center">
                  <span>{product.name} - ₦{product.price}</span>
                  <input
                    type="number"
                    min="1"
                    className="form-control w-25"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                  />
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProduct(index)}>Delete</button>
                </div>
              ))}
            </div>
          )}

          <div className="mb-3">
            <h5>Payment Method</h5>
            <select
              className="form-control"
              name="method"
              value={selectedPayment.method}
              onChange={handlePaymentChange}
            >
              {paymentMethods.map((method, index) => (
                <option key={index} value={method}>{method}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <h5>Transaction Summary</h5>
            <p>Total Amount: ₦{totalAmount}</p>
          </div> 

          <button className="btn btn-secondary w-100 mb-2"><a href="/Editorder" className="text-white fw-bold text-decoration-none">Edit Order</a></button>
          <button className="btn btn-primary w-100 fw-bold" onClick={handleCompleteOrder}>Complete Order</button>
        </div>

        {showReceipt && receiptDetails && (
  <div className="card shadow p-3 mt-4" style={{ maxWidth: "500px", width: "100%" }}>


    {/* Company Details */}
    <div className="text-center">
      <h5>{receiptDetails.companyName}</h5>
      <p>{receiptDetails.address}</p>
      <p><strong>Tel:</strong> {receiptDetails.phone}</p>
    </div>

    <hr />

    {/* Receipt Info */}
    <p><strong>Receipt No:</strong> {receiptDetails.receiptNo}</p>
    <p><strong>Date & Time:</strong> {receiptDetails.timestamp}</p>
    <p><strong>Sales Rep:</strong> {salesRepName}</p>
    <p><strong>Payment Method:</strong> {receiptDetails.paymentMethod}</p>

    {/* Purchased Items Table */}
    <h5 className="mt-3">Purchased Items</h5>
    <table className="table table-bordered text-center">
      <thead>
        <tr>
          <th>Description</th>
          <th>Qty</th>
          <th>Price (₦)</th>
          <th>Amount (₦)</th>
        </tr>
      </thead>
      <tbody>
        {receiptDetails.products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.price * product.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <hr />

    {/* Sub Total */}
    <p className="text-end"><strong>Sub Total:</strong> ₦{receiptDetails.totalAmount}</p>

    {/* Total Amount */}
    <p className="text-end"><strong>Total Amount:</strong> ₦{receiptDetails.totalAmount}</p>

    {/* Amount Paid */}
    <p className="text-end"><strong>Amount Paid:</strong> ₦{receiptDetails.totalAmount}</p>
  </div>
)}



      </div>
    </div>
  );
};

export default Salesplaceorder;
