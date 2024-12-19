import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';


function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
    </Routes>
  </Router>
  );
}

export default App;
