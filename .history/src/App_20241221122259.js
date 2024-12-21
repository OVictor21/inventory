import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import Orderpage from './pages/orderpage';
import Addremove from './pages/addremove';
import Adduser from './pages/adduser';
import Security from './pages/security';




function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<Admin />} />   
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path='/Reset1' element={<Reset1/>} />
        <Route path='/Reset2' element={<Reset2 />} />
        <Route path='/Editprofile' element={<Editprofile/>}/>
        <Route path='/Inventory' element={<Inventory/>} />
        <Route path='/Monitor' element={<Monitor/>} />
        <Route path='/Addproduct' element={<Addproduct />}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/Orderpage' element={<Orderpage/>}/>
        <Route path='/Addremove' element={<Addremove />}/>
        <Route path='/Adduser' element={<Adduser/>}/>
        <Route path='/Security' element={<Security />>}/>
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;