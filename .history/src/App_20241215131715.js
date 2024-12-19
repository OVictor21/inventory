// import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/home";
import Login from "./components/login";
import SideNav from './sidebar';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Sidebar" element={<SideNav/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
