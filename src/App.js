import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from './components/signup';
import Reset1 from './components/reset1';
import Reset2 from './components/reset2';
import Admin from './pages/Admin';
import Editprofile from './pages/editprofile';
import Inventory from './pages/inventory';
import Monitor from './pages/monitor';
import Addproduct from './pages/addproduct';
import Order from './pages/order';
import Addremove from './pages/addremove';
import Adduser from './pages/adduser';
import Security from './pages/security';
import Purchase from './pages/purchase';
import Removeuser from './pages/removeuser';
import Inventoryproducts from './pages/inventoryproduct';
import Products from './pages/product';
import Productlist from './pages/productlist';
import Editproduct from './pages/editproduct';
import Edititems from './pages/edititems';
import Transaction from './pages/transaction';
import Placeorder from './pages/placeorder';
import Dashboard from './pages/dashboard';
import AccountSettings from './pages/accountsettings';

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
          <Route path="/Editprofile" element={<Editprofile />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Monitor" element={<Monitor />} />
          <Route path="/Addproduct" element={<Addproduct />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Addremove" element={<Addremove />} />
          <Route path="/Adduser" element={<Adduser />} />
          <Route path="/Security" element={<Security />} />
          <Route path="/Purchase" element={<Purchase />} />
          <Route path="/Removeuser" element={<Removeuser />} />
          <Route path="/Inventoryproducts" element={<Inventoryproducts />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Productlist" element={<Productlist />} />
          <Route path="/EditProduct" element={<Editproduct />} />
          <Route path="/Edititems" element={<Edititems />} />
          <Route path="/Transaction" element={<Transaction />} />
          <Route path="/Placeorder" element={<Placeorder />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/AccountSettings" element={<AccountSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
