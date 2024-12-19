// import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/home";
import Login from "./components/login";
import Signup from './components/signup';
import Reset1 from './components/reset1';
import Reset2 from './components/reset2';
import Admin from './pages/Admin';
import Setting from './pages/setting';
import Editprofile from './pages/editprofile';
import Inventory from './pages/inventory';
import Monitor from './pages/monitor';



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path='/Reset1' element={<Reset1/>} />
        <Route path='/Reset2' element={<Reset2 />} />
        <Route path='/Admin' element={<Admin/>} />
        <Route path='/Setting' element={<Setting/>}/>
        <Route path='/Editprofile' element={<Editprofile/>}/>
        <Route path='/Inventory' element={<Inventory/>} />
        <Route path='/Monitor' element={<Monitor/>} />
        
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
