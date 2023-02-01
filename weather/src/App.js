import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header";
import AddCity from './components/addCity';
import Home from './Pages/Home';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addCity" element={<AddCity/>}/>
      </Routes>
    </Router>
  );
}

export default App;
