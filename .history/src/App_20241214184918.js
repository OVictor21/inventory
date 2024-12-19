import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";

function App() {
  return (
  

    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/Login" element={<Login /> } />
      </Routes>
    </Router>
  );
}

export default App;
