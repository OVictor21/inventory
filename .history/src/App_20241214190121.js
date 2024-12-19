import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/home";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
