import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './body';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
