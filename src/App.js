import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from './components/signup';
import Reset1 from './components/reset1';
import Reset2 from './components/reset2';
import Admin from './pages/Admin';
import Addproduct from './pages/addproduct';
import Adduser from './pages/adduser';
import Security from './pages/security';
import Productlist from './pages/productlist';
import Dashboard from './pages/dashboard';
import AccountSettings from './pages/accountsettings';
import PreviewOrder from './pages/previeworder';
import Orderpage from './pages/orderpage';
import Checkout from './pages/checkout';
import PaymentSuccess from './pages/paymentsucess';
import SalesReport from './pages/salesreport';
import PurchaseReport from './pages/purchasereport';
import Userslist from './pages/userslist';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Reset1" element={<Reset1 />} />
          <Route path="/Reset2" element={<Reset2 />} />
          <Route path="/Addproduct" element={<Addproduct />} />
          <Route path="/Adduser" element={<Adduser />} />
          <Route path="/Security" element={<Security />} />
          <Route path="/Productlist" element={<Productlist />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/AccountSettings" element={<AccountSettings />} />
          <Route path="/Previeworder" element={<PreviewOrder/>} />
          <Route path="/Orderpage" element={<Orderpage/>} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/Paymentsucess" element={<PaymentSuccess/>} />
          <Route path="/Salesreport" element={<SalesReport/>} />
          <Route path="/Purchasereport" element={<PurchaseReport/>} />
          <Route path="/Userlist" element={<Userslist/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
