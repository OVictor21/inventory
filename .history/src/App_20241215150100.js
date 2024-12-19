// import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/home";
import Login from "./components/login";
import Signup from './components/signup';



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path='/Reset1' element={}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
