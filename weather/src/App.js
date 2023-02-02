import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header";
import AddCity from './components/addCity';
import Home from './Pages/Home';
import WeatherDetails from "./components/WeatherDetails";
import dashBack from "./img/DashBack.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div style={{backgroundImage: `url(${dashBack})`}}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addCity" element={<AddCity/>}/>
        <Route path="/:id" element={<WeatherDetails/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
