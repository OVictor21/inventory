import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/home";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
