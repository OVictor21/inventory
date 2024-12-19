import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/home";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />ERROR in [eslint]
src\components\home.jsx
  Line 2:1:  Expected an assignment or function call and instead saw an expression  no-unused-expressions
  Line 2:1:  'i' is not defined                                                     no-undef

Search for the keywords to learn more about each error.

webpack compiled with 1 error
    </div>
  );
}

export default App;
