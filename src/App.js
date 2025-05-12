import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from './routes/PrivateRoute'; // ✅ import the PrivateRoute you created
import { useAuth } from "./context/AuthContext";
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

function App() {
  const { isReady } = useAuth();

  if (!isReady) {
    return <div className="d-flex justify-content-center mt-5">Loading...</div>;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* ✅ Public routes */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/reset1' element={<Reset1 />} />
          <Route path='/reset2' element={<Reset2 />} />

          <Route element={<PrivateRoute requiredRole="ADMIN" />}>
            <Route path='/admin' element={<Admin />} />
            <Route path='/editprofile' element={<Editprofile />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/monitor' element={<Monitor />} />
            <Route path='/addproduct' element={<Addproduct />} />
            <Route path='/order' element={<Order />} />
            <Route path='/addremove' element={<Addremove />} />
            <Route path='/adduser' element={<Adduser />} />
            <Route path='/security' element={<Security />} />
            <Route path='/purchase' element={<Purchase />} />
            <Route path='/removeuser' element={<Removeuser />} />
            <Route path='/inventoryproducts' element={<Inventoryproducts />} />
            <Route path='/products' element={<Products />} />
            <Route path='/productlist' element={<Productlist />} />
            <Route path='/editproduct' element={<Editproduct />} />
            <Route path='/edititems' element={<Edititems />} />
            <Route path='/transaction' element={<Transaction />} />
            <Route path='/placeorder' element={<Placeorder />} />
          </Route>

          {/* ✅ Catch all unknown paths */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
