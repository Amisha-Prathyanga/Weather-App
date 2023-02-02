import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header";
import AddCity from './components/addCity';
import Home from './Pages/Home';
import WeatherDetails from "./components/WeatherDetails";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addCity" element={<AddCity/>}/>
        <Route path="/:id" element={<WeatherDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
